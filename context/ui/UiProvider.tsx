import { FC, PropsWithChildren, useReducer } from "react";
import { UiContext, uiReducer } from "./";

export interface UiState {
  isModalOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
  isModalOpen: false,
};

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleModal = () => {
    dispatch({ type: "[UI] - ToggleModal" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,

        //* Methods
        toggleModal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
