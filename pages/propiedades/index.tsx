import { AppLayout } from "@/components/layouts/AppLayout";
import {
  PropertiesGrid,
  PropertyHeader,
  PropertyModal,
} from "@/components/properties";
import { Fab, LoadingSpinner } from "@/components/ui";
import { AuthContext, UiContext } from "@/context";
import { fetcher } from "@/utils/fetcher";
import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { filterData } from "@/utils/";
import Image from "next/image";

const PropiedadesPage = () => {
  const { isModalOpen, toggleModal } = useContext(UiContext);
  const { user } = useContext(AuthContext);
  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const filter = {
    address: watch("address", ""),
    type: watch("type"),
    rent: watch("rent"),
    sale: watch("sale"),
  };

  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/api/properties",
    fetcher,
    { refreshInterval: 1000 }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <LoadingSpinner />;

  const filteredData = filterData(data, filter);

  return (
    <AppLayout
      title="Inmobilia Caracas - Propiedades"
      pageDescription="Lista de propiedades disponibles"
    >
      <PropertyHeader user={user?.fullName} />
      <form className="flex justify-center gap-10 bg-dark-blue py-3 mb-5 ">
        <input
          type="text"
          className="h-fit px-3 py-1 rounded-md shadow-md focus:outline-none hidden md:block bg-blue text-white"
          placeholder="Filtrar por ubicación"
          {...register("address")}
        />
        <div className="flex items-center gap-2 text-white">
          <input type="checkbox" {...register("sale")} />
          <h1>Venta</h1>
        </div>
        <div className="flex items-center gap-2 text-white">
          <input type="checkbox" {...register("rent")} />
          <h1>Alquiler</h1>
        </div>
        <select
          className="focus:outline-yellow px-3 py-1 rounded-sm bg-blue text-white"
          {...register("type")}
        >
          <option value="any">Todo</option>
          <option value="Apartamento">Apartamento</option>
          <option value="Casa">Casa</option>
          <option value="Terreno">Terreno</option>
          <option value="Local / Oficina">Local / Oficina</option>
          <option value="Edificio">Edificio</option>
        </select>
      </form>
      <div className="flex justify-center">
        <div className="mx-5 max-w-7xl">
          {filteredData.length === 0 ? (
            <PropertiesGrid properties={data} />
          ) : (
            <PropertiesGrid properties={filteredData} />
          )}
        </div>
      </div>
      {user && (
        <Fab>
          <AiOutlinePlus />
        </Fab>
      )}

      <PropertyModal isOpen={isModalOpen} onClose={toggleModal} type="add" />
    </AppLayout>
  );
};

export default PropiedadesPage;
