import { IMember } from "@/data";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import { FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export const MemberCard: FC<IMember> = ({
  name,
  title,
  desc,
  img,
  email,
  instagram,
  phone,
}) => {
  return (
    <div className="bg-dark-blue flex flex-col md:w-auto items-center m-5 shadow-md">
      <Image src={img} alt={name} className="drop-shadow-md" />
      <div className="p-5 text-white flex flex-col gap-2">
        <h1 className="text-yellow text-3xl font-semibold">{name}</h1>
        <h2 className="text-2xl mb-2">{title}</h2>

        <p className="mb-5 text-lg">{desc}</p>
        <ul>
          <li className="flex items-center gap-2">
            <FaInstagram className="text-yellow" />
            {instagram}
          </li>
          <li className="flex items-center gap-2">
            <FiMail className="text-yellow" />
            {email}
          </li>
          <li className="flex items-center gap-2">
            <FiPhone className="text-yellow" />
            {phone}
          </li>
        </ul>
      </div>
    </div>
  );
};
