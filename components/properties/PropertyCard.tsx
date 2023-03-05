import { inmobiliaApi } from "@/api/inmobiliaApi";
import { IProperty } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useContext } from "react";
import { FaBath, FaCarSide, FaTrash } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import Swal from "sweetalert2";

interface Props {
  property: IProperty;
}

export const PropertyCard: FC<Props> = ({ property }) => {
  const user = localStorage.getItem("fullName");

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
    <div className="bg-dark-blue shadow-md transition ease-in pb-5 ">
      <Link href={`/propiedades/${property._id}`}>
        <Image
          src={property.img![0]}
          alt={property.description}
          width={500}
          height={500}
          priority
          className="object-cover h-64"
        />
        <div className="my-3 text-center">
          <h1 className="text-yellow text-2xl capitalize">
            {property.address}
          </h1>
          <p className="text-white text-sm">{property.size} mts^2</p>
        </div>
        <div className="flex justify-evenly text-white my-5">
          {property.sale !== 0 && <h2>Venta: {property.sale}$</h2>}
          {property.rent !== 0 && <h2>Alquiler: {property.rent}$</h2>}
        </div>
        <div className="flex justify-evenly items-center text-white text-center mt-8">
          <div>
            <FaBath />
            <h2>{property.bath}</h2>
          </div>
          <div>
            <IoIosBed />
            <h2>{property.rooms}</h2>
          </div>
          <div>
            <FaCarSide />
            <h2>{property.parking}</h2>
          </div>
        </div>
      </Link>
      {user && (
        <div className="flex justify-center gap-5 mt-7 mb-2">
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
