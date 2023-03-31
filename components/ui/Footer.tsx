import Image from "next/image";
import Link from "next/link";
import { FC, useContext } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../../public/Logo-Ana-palacios.png";
import { AuthContext } from "@/context";
import { useRouter } from "next/router";

export const Footer: FC = () => {
  const router = useRouter();
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser();
    router.push('/');
  }
  return (
    <footer className="bg-dark-blue mt-auto py-14 flex-col">
      <div className="flex justify-evenly text-white items-center text-sm md:text-base">
        <div className="flex flex-col gap-3 w-44 md:w-60">
          <Image src={logo} alt="logo of brand" priority />
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/" className="hover:text-yellow transition ease-in">
            Home
          </Link>
          <Link
            href="/properties"
            className="hover:text-yellow transition ease-in"
          >
            Propiedades
          </Link>
          <Link href="/about" className="hover:text-yellow transition ease-in">
            Quiénes Somos
          </Link>
          {!user ? (
            <Link
              href="/auth/login"
              className="hover:text-yellow transition ease-in"
            >
              Iniciar Sesión
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="hover:text-yellow text-left transition ease-in"
            >
              Cerrar Sesión
            </button>
          )}
        </div>
        <div className="flex flex-col gap-5 text-xl">
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
    </footer>
  );
};
