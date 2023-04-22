import { inmobiliaApi } from "@/api/inmobiliaApi";
import { AuthContext } from "@/context";
import { IProperty } from "@/interfaces";
import { format } from "../../utils";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useContext } from "react";
import { FaBath, FaCarSide, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { IoIosBed } from "react-icons/io";
import { BsShareFill } from "react-icons/bs"
import { RiArrowRightSLine } from "react-icons/ri";

interface Props {
  property: IProperty;
}

export const PropertyCard: FC<Props> = ({ property }) => {
  const { user } = useContext(AuthContext);

  const handleDelete = () => {
    Swal.fire({
      title: "¿Seguro?",
      text: "Esta acción no se puede revertir.",
      icon: "warning",
      iconColor: "#D4BA70",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar Propiedad",
      cancelButtonText: "Cancelar",
    }).then((result: any) => {
      if (result.isConfirmed) {
        inmobiliaApi.delete(`properties/${property._id}`);
      }
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(process.env.APP_URL + "propiedades/" + property._id);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      toast: true,
      title: 'Link copiado al portapapeles',
      showConfirmButton: false,
      timer: 2000,
      backdrop: false,
    })
  }

  return (
    <div className="bg-dark-blue shadow-md transition ease-out pb-5 relative hover:-translate-y-1 rounded-md">
      <Link href={`/propiedades/${property._id}`}>
        <Image
          src={property.img![0]}
          alt={property.description}
          width={500}
          height={500}
          priority
          className="object-cover h-64 rounded-t-md"
        />
        <div className="mx-5 my-5 text-center ">
          <span className="flex gap-1 text-yellow text-2xl capitalize mb-2 justify-center items-center">
            <h1 className="hover:underline font-semibold">
              {property.address}
            </h1>
            <RiArrowRightSLine />
          </span>
          <p className="text-white text-sm line-clamp-3 h-16">
            {property.description}
          </p>
        </div>
        <div className="flex justify-around text-center">
          {property.size !== undefined && property.size > 0 && (
            <h2 className="text-yellow">
              Construcción: <br />{" "}
              <span className="text-lg text-white">{property.size} mts</span>
            </h2>
          )}
          {property.terrain !== undefined && property.terrain > 0 && (
            <h2 className="text-yellow">
              Terreno: <br />{" "}
              <span className="text-lg text-white">{property.terrain} mts</span>
            </h2>
          )}
        </div>
        <div className="flex flex-col my-5 text-white text-center">
          <div className="flex justify-evenly items-center text-xl my-3">
            <div>
              <FaBath className="text-yellow" />
              <h2>{property.bath}</h2>
            </div>
            <div>
              <IoIosBed className="text-yellow" />
              <h2>{property.rooms}</h2>
            </div>
            <div>
              <FaCarSide className="text-yellow" />
              <h2>{property.parking}</h2>
            </div>
          </div>

          <div className="flex justify-around">
            {property.sale !== undefined && property.sale > 0 && (
              <h2 className="text-yellow">
                Venta: <br />{" "}
                <p className="text-lg text-white">{format(property.sale!)}</p>
              </h2>
            )}
            {property.rent !== undefined && property.rent > 0 && (
              <h2 className="text-yellow">
                Alquiler: <br />{" "}
                <p className="text-lg text-white">{format(property.rent!)}</p>
              </h2>
            )}
          </div>
        </div>
      </Link>
      <div className="flex flex-col justify-center gap-5 absolute right-2 top-2">
        {user && (
          <button
            onClick={handleDelete}
            className="text-white px-3 py-2 border backdrop-blur-sm rounded-md transition ease-in hover:bg-error hover:text-white hover:border-error"
          >
            <FaTrash />
          </button>
        )}
        <button onClick={handleCopy} className="text-white px-3 py-2 border backdrop-blur-sm rounded-md transition ease-in hover:bg-yellow hover:text-white hover:border-yellow">
          <BsShareFill />
        </button>
      </div>
    </div>
  );
};