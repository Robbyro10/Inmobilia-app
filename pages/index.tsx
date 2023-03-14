import { AppLayout } from "@/components/layouts/AppLayout";
import { Button } from "@/components/ui";
import Image from "next/image";
import modernHouse from "../public/properties/modern-house.jpg";
import { Contact, Hero, LandingHouseGrid, Team } from "@/components/landing";

export default function Home() {
  return (
    <AppLayout
      title="Inmobilia Caracas - Home"
      pageDescription="Asesoría inmobiliaria en Caracas"
    >
      <Hero />

      <div className="flex flex-col md:flex-row max-w-screen-xl justify-center items-center my-5 mx-auto py-5">
        <div className="md:w-1/2 p-2 mx-5">
          <Image
            src={modernHouse}
            alt="modern white house"
            height={100}
            width={600}
            className="rounded drop-shadow-md animate__animated animate__fadeIn"
          />
        </div>
        <div className="md:w-1/2 p-5 mx-5">
          <h1 className="text-yellow text-xl md:text-3xl mb-5 font-semibold">
            El mejor catálogo de Propiedades en Caracas
          </h1>
          <h2 className="text-white mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            rerum, corrupti at hic quidem eveniet laboriosam inventore tempore
            eum, est, exercitationem odio sed! Numquam harum et repudiandae
            odit, incidunt tempora.
          </h2>
          <div className="text-sm">
            <Button text="Ver Propiedades" href="propiedades" />
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h1 className="text-3xl font-semibold text-yellow mb-8">
          Algunas de Nuestras Propiedades
        </h1>
        <hr className="text-yellow w-2/3 mx-auto max-w-screen-lg" />
      </div>

      <LandingHouseGrid />

      <div className="text-center">
        <h1 className="text-3xl font-semibold text-yellow mb-8">
          Nuestro Equipo
        </h1>
        <hr className="text-yellow w-2/3 mx-auto max-w-screen-lg" />
      </div>
      <Team />

      <Contact />
    </AppLayout>
  );
}
