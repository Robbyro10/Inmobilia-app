import Image from "next/image";
import avila from "../../public/avila.jpg";
import { Button } from "../ui";

export const Hero = () => {
  return (
    <div className="text-white text-center flex flex-col items-center justify-center relative h-screen w-screen">
      <Image
        src={avila}
        priority
        alt="Big image of cerro avila"
        sizes="100vw"
        className="contrast-50 brightness-50 h-full object-cover w-full"
      />
      <div className="flex flex-col gap-5 absolute mx-auto">
        <h1 className="text-3xl lg:text-6xl animate__animated animate__fadeInDown">
          INMOBILIA CARACAS
        </h1>
        <h2 className="text-lg lg:text-3xl text-yellow">
          Asesoría Inmobiliaria
        </h2>
        <p className="text-lg lg:text-3xl text-yellow">Compra y alquiler de propiedades en la ciudad de Caracas</p>
        <div className="text-xl">
          <Button text="Ver Propiedades" href="propiedades" />
        </div>
      </div>
    </div>
  );
};
