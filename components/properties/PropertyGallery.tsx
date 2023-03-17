import { inmobiliaApi } from "@/api/inmobiliaApi";
import { IUser } from "@/interfaces";
import Image from "next/image";
import React, { FC } from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

interface Props {
  images: string[];
  user?: IUser;
  id: string;
}

export const PropertyGallery: FC<Props> = ({ images, id, user }) => {
  const handleDelete = (img: string) => {
    if (images.length === 1) {
      Swal.fire("Error", "Toda propiedad debe tener una imagen.", "error");
      return;
    }
    Swal.fire({
      title: "¿Seguro?",
      text: "Esta acción no se puede revertir.",
      icon: "warning",
      iconColor: "#D4BA70",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar Imagen",
      cancelButtonText: "Cancelar",
    }).then((result: any) => {
      if (result.isConfirmed) {
        const newImageArray = images.filter((image: string) => image !== img);
        inmobiliaApi.patch(`properties/${id}`, { img: newImageArray });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center mt-5 m-auto max-w-screen-xl">
      {images.map((img: string) => (
        <div className="relative  md:h-64" key={img}>
          {user && (
            <button
              onClick={() => handleDelete(img)}
              className="text-white right-0 m-2 absolute transition ease-in border hover:border-error hover:bg-error hover:text-white p-3 rounded text-sm"
            >
              <FaTrash />
            </button>
          )}

          <Image
            width={400}
            height={400}
            key={img}
            src={img}
            className="object-cover h-full w-full"
            alt={`Image of property ${id}`}
          />
        </div>
      ))}
    </div>
  );
};
