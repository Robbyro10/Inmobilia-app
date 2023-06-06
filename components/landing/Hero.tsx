import Image from "next/image";
import avila from "../../public/avila3.jpeg";
import { Button } from "../ui";

export const Hero = () => {
  return (
    <div className="text-white text-center flex flex-col items-center justify-center relative h-screen w-screen">
      <Image
        src={avila}
        priority
        alt="Big image of cerro avila"
        sizes="100vw"
        className="contrast-75 brightness-50 h-full object-cover w-full"
      />
      <div className="flex flex-col gap-5 absolute mx-auto px-1 top-1/2 transform -translate-y-3/4">
        <h1 className="text-4xl font-semibold lg:text-6xl animate__animated animate__fadeInDown">
          Inmobilia Caracas
        </h1>
        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-2xl lg:text-3xl text-yellow">
            Asesoría Inmobiliaria
          </h2>
          <p className="text-lg lg:text-xl text-yellow">
            Compra, venta y alquiler de propiedades en la ciudad de Caracas
          </p>
          <div className="md:text-xl mt-5">
            <Button text="Ver Propiedades" href="propiedades" />
          </div>
        </div>
      </div>
    </div>
  );
};
