import Image from "next/image";
import { FC } from "react";
import cabin from "../../public/properties/cabin.jpg";
import { Socials } from "../ui";

export const Contact: FC = () => {
  return (
    <div id="contact" className="text-white text-center my-10 flex flex-col items-center justify-center relative h-screen">
        <Image
          src={cabin}
          alt="dark house"
          className="contrast-50 brightness-50 h-full object-cover"
        />
        <div className="absolute">
          <h1 className="text-5xl mb-8 font-semibold ">Contacto</h1>
          <Socials />
        </div>
      </div>
  )
}
