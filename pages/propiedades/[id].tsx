import { GetServerSideProps, NextPage } from "next";
import { Fab, LoadingSpinner } from "@/components/ui";
import { AuthContext, UiContext } from "@/context";
import { fetcher, format } from "@/utils/";
import { AppLayout } from "@/components/layouts/AppLayout";
import {
  AddImageForm,
  Carousel,
  PropertyBar,
  PropertyModal,
} from "@/components/properties";
import { useContext } from "react";
import { IoPencilSharp } from "react-icons/io5";
import useSWR from "swr";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { inmobiliaApi } from "@/api/inmobiliaApi";
import { BottomContactBar, ContactBox } from "@/components/teams";

interface Props {
  id: string;
}

const PropertyPage: NextPage<Props> = ({ id }) => {
  const { isModalOpen, toggleModal } = useContext(UiContext);
  const { user } = useContext(AuthContext);

  const { data, error, isLoading } = useSWR(`/properties/${id}`, fetcher, { refreshInterval: 1000 });

  const handleDelete = (img: string) => {
    if (data.img.length === 1) {
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
        const newImageArray = data.img.filter((image: string) => image !== img);
        inmobiliaApi.patch(`properties/${id}`, { img: newImageArray });
      }
    });
  };

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
        <div className="">
          <div className="m-5">
            <h1 className="text-yellow text-xl md:text-3xl font-semibold">
              Descripción
            </h1>
            <p className="text-white text-xl mt-5">{data.description}</p>
          </div>
          <div className="m-5">
            <h1 className="text-yellow text-xl md:text-3xl font-semibold">
              Precio
            </h1>
            <div className="flex flex-col text-xl">
              {data.sale !== 0 && (
                <p className="text-white mt-5">
                  Venta: <b> {format(data.sale)}</b>
                </p>
              )}
              {data.rent !== 0 && (
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
            <p className="text-white mt-5">{data.addOns}</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center mt-5 m-auto max-w-screen-xl">
          {data.img!.map((img: string) => (
            <div className="relative" key={img}>
              {user && (
                <button
                  onClick={() => handleDelete(img)}
                  className="text-white right-0 m-2 absolute transition ease-in border hover:border-white hover:bg-white hover:text-blue p-3 rounded text-sm"
                >
                  <FaTrash />
                </button>
              )}

              <img
                key={img}
                src={img}
                className="object-cover h-full w-full"
                alt={data.description}
              />
            </div>
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
