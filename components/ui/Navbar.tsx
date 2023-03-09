import Image from "next/image";
import Link from "next/link";
import { FC, useState, useContext } from "react";
import logo from "../../public/Logo-Ana-palacios.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import {BiLogOut} from "react-icons/bi"
import { AuthContext } from "@/context";

export const Navbar: FC = () => {
  const [open, setOpen] = useState(true);
  const { user, logoutUser } = useContext(AuthContext);
  const { asPath } = useRouter();
  const handleLogout = () => {
    logoutUser();
  }

  return (
    <nav className="bg-blue text-white p-4 shadow-md fixed top-0 w-screen z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-around items-center">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                priority
                src={logo}
                alt="logo de inmobilia Caracas"
                className="w-52"
              />
            </Link>
          </div>

          <div className="flex gap-5">
            <Link
              href="/propiedades"
              className={`hover:text-yellow transition hidden md:flex ${asPath.includes('/propiedades') ? 'text-yellow' : ''}`}
            >
              Propiedades
            </Link>
            <Link
              href="/about"
              className={`hover:text-yellow transition ease-in hidden md:flex ${asPath.includes('/about') ? 'text-yellow' : ''}`}
            >
              Quiénes Somos
            </Link>
            <Link
              href="/#contact"
              className="hover:text-yellow transition ease-in hidden md:flex"
            >
              Contacto
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-xl" onClick={() => setOpen(!open)}>
              <GiHamburgerMenu />
            </button>
          </div>
          {user && (
            <button onClick={handleLogout} className="md:flex items-center gap-2 hidden text-white px-4 py-2 border rounded-md font-semibold transition ease-in hover:bg-error hover:text-white hover:border-error ">
              <BiLogOut />
              <span>Cerrar Sesión</span>
            </button>
          )}
        </div>
        <div
          className={
            open ? "hidden mt-5 text-center" : "block mt-5 text-center"
          }
        >
          <Link
            href="propiedades"
            className="hover:text-yellow transition mt-5 block md:hidden"
          >
            Propiedades
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow transition mt-5 ease-in block md:hidden"
          >
            Quienes Somos
          </Link>
          <Link
            href="/#contact"
            className="hover:text-yellow transition mt-5 ease-in block md:hidden"
          >
            Contacto
          </Link>
          {user && (
            <div
              onClick={handleLogout}
              className="hover:text-yellow transition mt-5 ease-in block md:hidden"
            >
              Cerrar Sesión
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
