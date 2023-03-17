import { GetServerSideProps, NextPage } from "next";
import { Fab, LoadingSpinner } from "@/components/ui";
import { AuthContext, UiContext } from "@/context";
import { fetcher, format } from "@/utils/";
import { AppLayout } from "@/components/layouts/AppLayout";
import {
  AddImageForm,
  Carousel,
  PropertyBar,
  PropertyGallery,
  PropertyModal,
} from "@/components/properties";
import { useContext } from "react";
import { IoPencilSharp } from "react-icons/io5";
import useSWR from "swr";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { inmobiliaApi } from "@/api/inmobiliaApi";
import { BottomContactBar, ContactBox } from "@/components/teams";
import Image from "next/image";

interface Props {
  id: string;
}

const PropertyPage: NextPage<Props> = ({ id }) => {
  const { isModalOpen, toggleModal } = useContext(UiContext);
  const { user } = useContext(AuthContext);

  const { data, error, isLoading } = useSWR(`/properties/${id}`, fetcher, {
    refreshInterval: 1000,
  });

  if (error) return <div>failed to load</div>;
  if (isLoading) return <LoadingSpinner />;

  return (
    <AppLayout
      title={`${data.type} - Inmobilia Caracas`}
      pageDescription={data.description}
    >
      <Carousel images={data.img} />

      <PropertyBar property={data} />

      <div className="flex flex-col md:flex-row justify-around items-center gap-5 w-full max-w-6xl m-auto">
        <div className="basis-2/3">
          <div className="m-5">
            <h1 className="text-yellow text-xl md:text-3xl font-semibold">
              Descripción
            </h1>
            <p className="text-white mt-5">{data.description}</p>
          </div>
          <div className="m-5">
            <h1 className="text-yellow text-xl md:text-3xl font-semibold">
              Precio
            </h1>
            <div className="flex flex-col md:text-xl">
              {(data.sale || data.sale > 0) && (
                <p className="text-white mt-5">
                  Venta: <b> {format(data.sale)}</b>
                </p>
              )}
              {(data.rent || data.rent > 0) && (
                <p className="text-white mt-5">
                  Alquiler: <b>{format(data.rent)}</b>{" "}
                </p>
              )}
            </div>
          </div>
          <div className="m-5 ">
            <h1 className="text-yellow text-xl md:text-3xl font-semibold">
              Agregados
            </h1>
            <p className="text-white mt-5 whitespace-pre-line">{data.addOns}</p>
          </div>
        </div>
        {/* In big screens */}
        <ContactBox />
        {/* In mobile */}
        <BottomContactBar />
      </div>
      <div className="m-5">
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h1 className="text-yellow text-xl md:text-3xl font-semibold mb-5 text-center">
            {user ? "Agregar Imágenes" : "Galería"}
          </h1>
          <hr className="text-yellow w-1/2 mb-8" />
          {user && <AddImageForm property={data} />}
        </div>
        <PropertyGallery user={user} images={data.img} id={id} />
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
