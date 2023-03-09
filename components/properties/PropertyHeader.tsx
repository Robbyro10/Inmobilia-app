import Image from "next/image";
import React, { FC } from "react";
import avila from "../../public/avila2.jpg";

interface Props {
  user?: string;
}

export const PropertyHeader: FC<Props> = ({ user }) => {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-yellow text-3xl text-center py-10">
        {!user ? "Nuestras Propiedades" : `Bienvenido, ${user}!`}
      </h1>
    </div>
  );
};
