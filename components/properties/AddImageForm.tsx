import { inmobiliaApi } from "@/api/inmobiliaApi";
import { IProperty } from "@/interfaces";
import axios from "axios";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

interface Props {
  property: IProperty
}

export const AddImageForm: FC<Props> = ({property}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("file", data.img[0]);
    formData.append("upload_preset", "inmobilia");
    await axios
      .post("https://api.cloudinary.com/v1_1/dwdimx0pg/image/upload", formData)
      .then((res) => {
        const imgArray = property.img;
        imgArray!.push(res.data.url)

        inmobiliaApi.patch(`properties/${property._id}`, { img: imgArray });
      });
    setValue("img", null)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="file:bg-yellow file:hover:bg-dark-yellow p-1 file:rounded file:border-none file:px-3 file:py-2 file:mr-5 bg-white rounded"
        type="file"
        accept="image/*"
        {...register("img")}
      />
      <button type="submit" className="bg-yellow py-3 rounded px-4 mx-2">Enviar</button>
    </form>
  );
};
