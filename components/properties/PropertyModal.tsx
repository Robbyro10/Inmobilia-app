import { inmobiliaApi } from "@/api/inmobiliaApi";
import { transformData } from "@/utils/transformData";
import axios from "axios";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { IoCloseSharp } from "react-icons/io5";
import { IProperty } from "@/interfaces";

interface Props {
  isOpen: boolean;
  type: "add" | "edit";
  property?: IProperty;
  onClose: () => void;
}

export const PropertyModal: FC<Props> = ({
  isOpen,
  onClose,
  type,
  property,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: property?.address,
      type: property?.type,
      description: property?.description,
      sale: property?.sale,
      rent: property?.rent,
      terrain: property?.terrain,
      size: property?.size,
      bath: property?.bath,
      rooms: property?.rooms,
      parking: property?.parking,
      addOns: property?.addOns,
      img: property?.img,
    },
  });

  const onSubmit = async (data: any) => {
    if (!data.sale && !data.rent) {
      Swal.fire(
        "Error",
        "Debe introducir un precio de venta o de alquiler",
        "error"
      );
      return;
    }
    if (!data.size && !data.terrain) {
      Swal.fire(
        "Error",
        "Debe introducir un valor de terreno o contrucción",
        "error"
      );
      return;
    }
    data = transformData(data);

    if (!Array.isArray(data.img)) {
      //Uploads img to cloudinary
      const formData = new FormData();
      formData.append("file", data.img[0]);
      formData.append("upload_preset", "inmobilia");
      await axios
        .post(
          "https://api.cloudinary.com/v1_1/dwdimx0pg/image/upload",
          formData
        )
        .then((res) => {
          const imgArray = new Array<string>(res.data.url);
          data.img = imgArray;
        });
    } else {
      data.img = undefined;
    }

    if (type === "add") {
      await inmobiliaApi
        .post("properties", data)
        .catch((err) => console.log(err.response.data));
    } else {
      await inmobiliaApi
        .patch(`properties/${property?._id}`, data)
        .catch((err) => console.log(err.response.data));
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 mt-12 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="mt-10 bg-blue p-6 rounded-sm w-5/6 lg:w-fit relative max-h-[calc(100vh-120px)] overflow-y-auto">
        <button
          onClick={onClose}
          className="text-yellow text-right border rounded-md p-1 absolute top-0 right-0 my-5 mx-6 hover:bg-yellow hover:text-blue transition ease-in "
        >
          <IoCloseSharp />
        </button>
        <h1 className="text-2xl text-yellow text-center my-5">
          {type === "add" ? "Agregar Propiedad" : "Editar Propiedad"}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="text-xs md:text-base">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-yellow">Zona</label>
                <input
                  className="rounded-sm focus:outline-yellow px-2 py-1 "
                  type="text"
                  {...register("address", {
                    required: true,
                  })}
                />
                {errors.address?.type === "required" && (
                  <p className="text-error">Campo obligatorio</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-yellow">Tipo</label>
                <select
                  className="focus:outline-yellow px-2 py-1 rounded-sm "
                  {...register("type")}
                >
                  <option value="Apartamento">Apartamento</option>
                  <option value="Casa">Casa</option>
                  <option value="Terreno">Terreno</option>
                  <option value="Local / Oficina">Local / Oficina</option>
                  <option value="Edificio">Edificio</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-yellow">Descripción</label>
              <input
                className="rounded-sm focus:outline-yellow px-2 py-1 "
                type="text"
                {...register("description", {
                  required: true,
                })}
              />
              {errors.description?.type === "required" && (
                <p className="text-error">Campo obligatorio</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex flex-col gap-1">
                  <label className="text-yellow">Venta</label>
                  <input
                    className="rounded-sm focus:outline-yellow px-2 py-1 "
                    type="number"
                    {...register("sale")}
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <label className="text-yellow">Alquiler</label>
                  <input
                    className="rounded-sm focus:outline-yellow px-2 py-1 "
                    type="number"
                    {...register("rent")}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-1">
                  <label className="text-yellow">Contrucción</label>
                  <input
                    className="rounded-sm focus:outline-yellow px-2 py-1 "
                    type="number"
                    {...register("size")}
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <label className="text-yellow">Terreno</label>
                  <input
                    className="rounded-sm focus:outline-yellow px-2 py-1 "
                    type="number"
                    {...register("terrain")}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-yellow">Baños</label>
                <input
                  className="rounded-sm focus:outline-yellow px-2 py-1 "
                  type="number"
                  {...register("bath", {
                    required: true,
                    min: 1,
                  })}
                />
                {errors.bath?.type === "required" && (
                  <p className="text-error">Campo obligatorio</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-yellow">Cuartos</label>
                <input
                  className="rounded-sm focus:outline-yellow px-2 py-1 "
                  type="number"
                  {...register("rooms", {
                    required: true,
                    min: 1,
                  })}
                />
                {errors.rooms?.type === "required" && (
                  <p className="text-error">Campo obligatorio</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-yellow">Puestos</label>
                <input
                  className="rounded-sm focus:outline-yellow px-2 py-1 "
                  type="number"
                  {...register("parking", {
                    required: true,
                    min: 1,
                  })}
                />
                {errors.parking?.type === "required" && (
                  <p className="text-error">Campo obligatorio</p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-yellow">Agregados</label>
              <textarea
                className="rounded-sm focus:outline-yellow px-2 py-1 "
                {...register("addOns")}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-yellow">
                {type === "add" ? "Imágen" : "Cambiar Imágen principal"}
              </label>
              <input
                className="file:bg-yellow w-full md:w-fit mt-2 file:hover:bg-dark-yellow p-1 file:rounded file:border-none file:px-3 file:py-2 file:mr-5 bg-white rounded"
                type="file"
                accept="image/*"
                {...register("img", {
                  required: type === "add" ? true : false,
                })}
              />
              {errors.img?.type === "required" && (
                <p className="text-error">Campo obligatorio</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-yellow transition ease-in py-1 rounded-sm w-full mt-4 hover:bg-dark-yellow text-white"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
