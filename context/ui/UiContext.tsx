import { createContext } from "react";

interface ContextProps {
  isModalOpen: boolean;
  // methods
  toggleModal: () => void;
}

export const UiContext = createContext({} as ContextProps);
