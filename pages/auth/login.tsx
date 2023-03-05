import { inmobiliaApi } from "@/api/inmobiliaApi";
import { AuthLayout } from "@/components/layouts";
import { NextPage } from "next";
import Link from "next/link";
import { useContext } from 'react';
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "@/context";

const LoginPage: NextPage = () => {
  const { replace } = useRouter();
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    
    const isValidLogin = await loginUser(data.email, data.password);
    if (!isValidLogin) {
      Swal.fire('Error', 'Datos incorrectos', 'error')
      return;
    };
    
    replace('/')
  };

  return (
    <AuthLayout title="Login - Inmobilia Caracas">
      <div className="bg-white p-5 rounded-sm shadow-md w-5/6 md:max-w-md">
        <h1 className="font-semibold text-2xl text-center my-5">
          Iniciar Sesión
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1">
            <label className="text-xl">Correo</label>
            <input
              className="rounded-sm px-3 py-2 bg-gray"
              type="email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email?.type === "required" && (
              <p className="text-error mb-3">Campo obligatorio</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <label className="text-xl">Contraseña</label>
            <input
              className="rounded-sm bg-gray px-3 py-2"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <p className="text-error">Campo obligatorio</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-yellow text-lg hover:bg-dark-yellow transition ease-in text-white w-full mt-10 rounded-sm py-2"
          >
            Acceder
          </button>
        </form>
        <div className="text-center mt-5">
          <Link href="/" className="hover:underline">
            Volver a home
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
