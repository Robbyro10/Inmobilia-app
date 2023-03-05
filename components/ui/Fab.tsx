import { UiContext } from "@/context";
import { FC, useContext, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const Fab: FC<Props> = ({children}) => {
  const { toggleModal } = useContext(UiContext)
  return (
    <button onClick={toggleModal} className="rounded-full fixed bottom-0 right-0 transition ease-in text-blue bg-yellow text-5xl border hover:bg-dark-yellow hover:border-dark-yellow border-yellow p-4 m-10">
        {children}
    </button>
  );
};
