import { AppLayout } from "@/components/layouts/AppLayout";
import { PropertiesGrid, PropertyModal } from "@/components/properties";
import { Fab, LoadingSpinner } from "@/components/ui";
import { AuthContext, UiContext } from "@/context";
import { IProperty } from "@/interfaces";
import { fetcher } from "@/utils/fetcher";
import { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useSWR from "swr";

const PropiedadesPage = () => {
  const [filter, setFilter] = useState("");
  const { isModalOpen, toggleModal } = useContext(UiContext);
  const { user } = useContext(AuthContext);

  const { data, error, isLoading } = useSWR(
    "http://localhost:3001/api/properties",
    fetcher,
    { refreshInterval: 1000 }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <LoadingSpinner />;

  let filteredData = data.filter((prop: IProperty) => {
    if (prop.address.toLowerCase().includes(filter.toLowerCase().trim()))
      return true;
  });

  return (
    <AppLayout
      title="Inmobilia Caracas - Propiedades"
      pageDescription="Lista de propiedades disponibles"
    >
      <div className="flex justify-center items-center flex-col md:flex-row my-5 gap-5 pb-8 pt-10">
        <h1 className="font-bold text-yellow text-3xl mx-10">
          {!user ? "Nuestras Propiedades" : `Bienvenido ${user.fullName}!`}
        </h1>
        <input
          type="text"
          className="h-fit px-4 py-2 rounded-md shadow-md focus:outline-none"
          onChange={(event) => setFilter(event.target.value)}
          value={filter}
          placeholder="Filtrar por ubicación"
        />
      </div>
      <div className="flex justify-center">
        <div className="mx-5 max-w-7xl">
          {filteredData.length === 0 ? (
            <>
              <h1 className="text-white text-xl my-5">
                No se encontraron propiedades con "{filter}"
              </h1>
              <PropertiesGrid properties={data} />
            </>
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
