import { UiContext } from "@/context";
import { FC, useContext, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const Fab: FC<Props> = ({children}) => {
  const { toggleModal } = useContext(UiContext)
  return (
    <button onClick={toggleModal} className="rounded-full fixed bottom-0 right-0 transition ease-in text-blue bg-yellow md:text-5xl text-2xl  border hover:bg-dark-yellow hover:border-dark-yellow border-yellow p-4 md:m-10 mb-20 mr-5">
        {children}
    </button>
  );
};
