import { AppLayout } from "@/components/layouts/AppLayout";
import { Button } from "@/components/ui";
import Image from "next/image";
import modernHouse from "../public/properties/modern-house.jpg";
import { Contact, Hero, LandingHouseGrid, Team } from "@/components/landing";

export default function Home() {
  return (
    <AppLayout
      title="Inmobilia Caracas - Home"
      pageDescription="Acesoria inmobiliaria en Caracas"
    >
      <Hero />
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row max-w-screen-xl justify-center items-center md:mx-24 gap-5 m-5 py-5">
          <div className="md:w-1/2 p-2">
            <Image
              src={modernHouse}
              alt="modern white house"
              className="rounded drop-shadow-md"
            />
          </div>
          <div className="md:w-1/2 p-5">
            <h1 className="text-yellow text-xl md:text-3xl mb-5 font-semibold">
              El mejor catalogo de Propiedades en Caracas
            </h1>
            <h2 className="text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur rerum, corrupti at hic quidem eveniet laboriosam
              inventore tempore eum, est, exercitationem odio sed! Numquam harum
              et repudiandae odit, incidunt tempora.
            </h2>
            <div className="text-sm">
              <Button text="Ver Propiedades" href="propiedades" />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-semibold text-center text-yellow mb-10">
        Algunas de Nuestras Propiedades
      </h1>
      <div  className="flex justify-center">
        <LandingHouseGrid />
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-semibold text-yellow mb-5">
          Nuestro Equipo
        </h1>
        <p className="text-white text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil,
          excepturi.
        </p>
      </div>

      <Team />

      <Contact />
    </AppLayout>
  );
}
