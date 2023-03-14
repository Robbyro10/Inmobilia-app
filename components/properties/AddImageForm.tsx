import { inmobiliaApi } from "@/api/inmobiliaApi";
import { IProperty } from "@/interfaces";
import axios from "axios";
import React, { FC, useState } from "react";
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

  const [isLoading, setIsLoading] = useState(false);

  const image = watch('img');

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    const formData = new FormData();
    formData.append("file", data.img[0]);
    formData.append("upload_preset", "inmobilia");
    await axios
      .post("https://api.cloudinary.com/v1_1/dwdimx0pg/image/upload", formData)
      .then((res) => {
        const imgArray = property.img;
        imgArray!.push(res.data.url)

        inmobiliaApi.patch(`properties/${property._id}`, { img: imgArray });
        setIsLoading(false);
      });
    setValue("img", null)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="file:bg-yellow file:hover:bg-dark-yellow p-1 file:rounded file:border-none file:px-3 file:py-2 file:mr-5 bg-white rounded disabled:bg-gray disabled:file:bg-dark-yellow"
        type="file"
        disabled={isLoading}
        accept="image/*"
        {...register("img")}
      />
      <button type="submit" disabled={isLoading || !image || image.length === 0} className="bg-yellow py-3 rounded px-4 mx-2 disabled:bg-dark-yellow">Enviar</button>
    </form>
  );
};
