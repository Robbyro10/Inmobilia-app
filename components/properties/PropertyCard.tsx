import { inmobiliaApi } from "@/api/inmobiliaApi";
import { AuthContext } from "@/context";
import { IProperty } from "@/interfaces";
import { format } from "../../utils"
import Image from "next/image";
import Link from "next/link";
import React, { FC, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

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
        <div className="my-3 mx-5 text-center">
          <h1 className="text-yellow text-2xl capitalize">
            {property.address}
          </h1>
          <p className="text-white text-lg">{property.description}</p>
        </div>
        <div className="flex justify-around text-white my-5 text-center">
          {(property.sale && property.sale > 0) && (
            <h2>
              Venta: <br /> <b className="text-lg">{format(property.sale!)}</b>
            </h2>
          )}
          {(property.rent && property.rent > 0) && <h2>
              Alquiler: <br /> <b className="text-lg">{format(property.rent!)}</b>
            </h2>}
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
