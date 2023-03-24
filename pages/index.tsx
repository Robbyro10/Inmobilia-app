import { AppLayout } from "@/components/layouts/AppLayout";
import { Button } from "@/components/ui";
import Image from "next/image";
import modernHouse from "../public/properties/modern-house.jpg";
import logo from "../public/logoSinfondo.png";
import { Contact, Hero, LandingHouseGrid, Team } from "@/components/landing";
import { OfferingCard } from "@/components/teams";

export default function Home() {
  return (
    <AppLayout
      title="Inmobilia Caracas - Home"
      pageDescription="Asesoría inmobiliaria en Caracas"
    >
      <Hero />

          <OfferingCard />
      <div className="flex flex-col md:flex-row px-5 max-w-screen-xl justify-center items-center my-5 mx-auto py-5">
        <div className="md:w-1/2 p-2 mx-5 basis-1/2">
          <Image
            src={modernHouse}
            alt="modern white house"
            height={100}
            width={600}
            className="rounded drop-shadow-md animate__animated animate__fadeIn"
          />
        </div>
        <div className="md:w-1/2 p-5 mx-5 basis-1/2">
          <h1 className="text-yellow text-xl md:text-3xl mb-5 font-semibold">
            Nuestro Catálogo de Propiedades
          </h1>
          <h2 className="text-white mb-5">
            Disponemos de un catálogo de propiedades variado y exclusivo en un solo lugar. Desde casas hasta terrenos, tenemos una gran variedad de
            inmuebles para ti. Visita nuestra lista de propiedades y contáctanos para visitas.
          </h2>
          <div className="text-sm">
            <Button text="Ver Propiedades" href="propiedades" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-5 max-w-screen-xl justify-center items-center my-5 mx-auto py-5">
        <div className="md:w-1/2 p-5 mx-5 basis-2/3">
          <h1 className="text-yellow text-xl md:text-3xl mb-5 font-semibold">
            La Mejor Asesoría Inmobiliaria
          </h1>
          <h2 className="text-white mb-5">
            Muchas veces la compra de una propiedad representa el patrimonio
            familiar o un activo para salvaguardar el capital trabajado a lo
            largo de una vida. También, representa calidad de vida y el logro de
            un sueño. En Inmobilia Caracas ayudamos a nuestros clientes a la
            mejor toma de decisiones, brindamos soluciones, ofreciendo una
            amplia cartera de propiedades. Nuestros pilares son comunicación,
            profesionalismo y confianza.
          </h2>
          <div className="text-sm">
            <Button text="Quiénes Somos" href="about" />
          </div>
        </div>
        <div className="md:w-1/4 p-2 mx-5 basis-1/3">
          <Image
            src={logo}
            alt="Inmobilia Caracas Logo"
            height={100}
            width={600}
            className="rounded drop-shadow-md animate__animated animate__fadeIn hidden md:block"
          />
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
