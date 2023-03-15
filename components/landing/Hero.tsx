import Image from "next/image";
import avila from "../../public/avila.jpg";
import { Button } from "../ui";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-white max-h-screen h-[400px] md:h-auto mb-10">
      <Image
        priority
        src={avila}
        alt="Big white mansion"
        className="contrast-75 brightness-50 w-full object-cover drop-shadow-md"
      />
      <div className="flex flex-col gap-5 absolute w-1/2">
        <h1 className="text-3xl lg:text-6xl animate__animated animate__fadeInDown">
          INMOBILIA CARACAS
        </h1>
        <h2 className="text-lg lg:text-2xl text-yellow mt-2">
          Asesoría Inmobiliaria
        </h2>
        <p className="hidden md:flex text-sm mx-auto">
        {/* Comunicacion, profesionalismo y confianza  */}
        </p>
        <div>
          <Button text="Ver Propiedades" href="propiedades" />
        </div>
      </div>
    </div>
  );
};
