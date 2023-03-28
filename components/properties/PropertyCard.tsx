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
import { RiArrowRightSLine } from "react-icons/ri"

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
        <div className="mx-5 mt-5 mb-8 text-center ">
          <span className="flex gap-1 text-yellow text-2xl capitalize mb-2 justify-center items-center">
            <h1 className="hover:underline">{property.address}</h1>
            <RiArrowRightSLine />
          </span>
          <p className="text-white text-lg line-clamp-3 h-20">
            {property.description}
          </p>
        </div>
        <div className="flex flex-col gap-5 my-5 text-white text-center">
          <div className="flex justify-evenly items-center   text-xl">
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
              <h2>
                Venta: <br />{" "}
                <b className="text-lg">{format(property.sale!)}</b>
              </h2>
            )}
            {property.rent !== undefined && property.rent > 0 && (
              <h2>
                Alquiler: <br />{" "}
                <b className="text-lg">{format(property.rent!)}</b>
              </h2>
            )}
          </div>
        </div>
      </Link>
      {user && (
        <div className="flex justify-center gap-5 absolute right-2 top-2">
          <button
            onClick={handleDelete}
            className="text-white px-3 py-2 border rounded-md transition ease-in hover:bg-error hover:text-white hover:border-error"
          >
            <FaTrash />
          </button>
        </div>
      )}
    </div>
  );
};
