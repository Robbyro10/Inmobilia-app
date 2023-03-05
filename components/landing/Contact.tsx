import Image from "next/image";
import { FC } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import cabin from "../../public/properties/cabin.jpg";

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
          <div className="flex justify-center gap-6 text-4xl">
            <a
              className="transition hover:text-yellow ease-in"
              target="_blank"
              href="https://www.instagram.com/inmobiliacaracas/"
            >
              <FaInstagram />
            </a>
            <a
              className="transition hover:text-yellow ease-in"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=584122291851"
            >
              <FaWhatsapp />
            </a>
            <a
              className="transition hover:text-yellow ease-in"
              href="mailto:inmobiliacaracas@gmail.com"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>
  )
}
