import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Socials = () => {
  return (
    <div className="flex justify-center gap-6 text-4xl">
      <a
        className="transition hover:text-yellow ease-out"
        target="_blank"
        href="https://www.instagram.com/inmobiliacaracas/"
      >
        <FaInstagram />
      </a>
      <a
        className="transition hover:text-yellow ease-out"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=584122291851"
      >
        <FaWhatsapp />
      </a>
      <a
        className="transition hover:text-yellow ease-out"
        href="mailto:inmobiliacaracas@gmail.com"
      >
        <FiMail />
      </a>
    </div>
  );
};
