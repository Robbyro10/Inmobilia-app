import Cookies from "js-cookie";
import { FC, PropsWithChildren, useEffect, useReducer } from "react";
import { IUser } from "../../interfaces";
import { AuthContext, authReducer } from "./";
import axios from "axios";
import { useRouter } from "next/router";
import { inmobiliaApi } from "@/api/inmobiliaApi";

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
  const router = useRouter();

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    if (!Cookies.get("token")) {
      return;
    }

    try {
      const { data } = await inmobiliaApi.get("auth/check-auth-status", {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      });
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
    } catch (error) {
      Cookies.remove("token");
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const { data } = await inmobiliaApi.post("auth/login", {
        email,
        password,
      });
      console.log('run')
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
      return true;
    } catch (error) {
      return false;
    }
  };

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await inmobiliaApi.post("auth/register", {
        email,
        password,
        name,
      });
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
      return {
        hasError: false,
      };

      //TODO: return
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data,
        };
      }

      return {
        hasError: true,
        message: "Could not create user, try again",
      };
    }
  };

  const logoutUser = () => {
    router.reload();
    Cookies.remove("token");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        //* Methods
        loginUser,
        logoutUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
