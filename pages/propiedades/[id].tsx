import { GetServerSideProps, NextPage } from "next";
import { Fab, LoadingSpinner } from "@/components/ui";
import { AuthContext, UiContext } from "@/context";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import { AppLayout } from "@/components/layouts/AppLayout";
import { AddImageForm, PropertyBar, PropertyModal } from "@/components/properties";
import Image from "next/image";
import { useContext } from "react";
import { IoPencilSharp } from "react-icons/io5";
import { RiImageAddFill } from "react-icons/ri";
import useSWR from "swr";

interface Props {
  id: string;
}

const PropertyPage: NextPage<Props> = ({ id }) => {
  const { isModalOpen, toggleModal } = useContext(UiContext);
  const { user } = useContext(AuthContext);

  const { data, error, isLoading, isValidating } = useSWR(
    `http://localhost:3001/api/properties/${id}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <LoadingSpinner />;

  return (
    <AppLayout
      title={`${data.type} - Inmobilia Caracas`}
      pageDescription={data.description}
    >
      <div className="flex justify-center">
        <img src={data.img[0]} alt={data.description} className="w-full" />
      </div>
      <PropertyBar property={data} />

      <div className="flex justify-center">
        <div className="max-w-7xl">
          <div className="m-5">
            <h1 className="text-yellow text-xl md:text-3xl font-semibold text-center">
              Descripción
            </h1>
            <p className="text-white text-xl mt-5">{data.description}</p>
          </div>
          <div className="m-5">
            <h1 className="text-yellow text-xl md:text-3xl font-semibold text-center">
              Precio
            </h1>
            <div className="flex justify-evenly text-xl">
              {data.sale !== 0 && (
                <p className="text-white mt-5">Venta: {data.sale}$</p>
              )}
              {data.rent !== 0 && (
                <p className="text-white mt-5">Alquiler: {data.rent}$</p>
              )}
            </div>
          </div>
          <div className="m-5  text-center">
            <h1 className="text-yellow text-xl md:text-3xl font-semibold">
              Agregados
            </h1>
            <p className="text-white mt-5">{data.addOns}</p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h1 className="text-yellow text-xl md:text-3xl font-semibold mb-5 text-center">
            {user ? "Agregar Imágenes" : "Galería"}
          </h1>
          {user && <AddImageForm property={data} />}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center mt-5">
          {data.img!.map((img: string) => (
              <img
                key={img}
                src={img}
                className="object-cover h-full w-full"
                alt={data.description}
              />
          ))}
        </div>
      </div>
      {user && (
        <Fab>
          <IoPencilSharp />
        </Fab>
      )}
      <PropertyModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        type="edit"
        property={data}
      />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      id,
    },
  };
};

export default PropertyPage;
