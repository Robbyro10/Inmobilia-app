import React from "react";
import { FiPhone } from "react-icons/fi";
import { Socials } from "../ui";

export const ContactBox = () => {
  return (
    <div className="hidden md:flex flex-col gap-8 bg-dark-blue h-fit p-8 rounded m-5 shadow-md text-white text-center">
      <h1 className="text-3xl text-yellow">¿Interesado?</h1>
      <h2 className="text-xl">Contáctenos para hacer una reserva</h2>
      <Socials />
      <hr className="" />
      <div className="flex text-xl justify-center items-center gap-2">
        <FiPhone />
        <h2>+58 4122291851</h2>
      </div>
    </div>
  );
};
