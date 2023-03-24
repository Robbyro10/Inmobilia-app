import Image from 'next/image'
import React from 'react'
import logo from "../../public/logoSinfondo.png";

export const OfferingCard = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 bg-dark-blue md:w-3/4 w-full max-w-screen-lg mx-auto p-10 ">
        <h1 className="text-3xl text-yellow text-left font-semibold mb-2">
          ¿Qué ofrecemos?
        </h1>
        <hr className="w-full text-yellow my-5" />

        <div className="flex flex-col md:flex-row gap-5 items-center">
          <ul className="text-white flex gap-2 flex-col m-5 text-left list-disc">
            <li>
              Recibimos y ofrecemos propiedades para la venta y el alquiler.
            </li>
            <li>Colocación de precio.</li>
            <li>Preparación del inmueble para la venta o alquiler.</li>
            <li>Promoción de inmuebles en portales inmobiliarios.</li>
            <li>
              Asesoría legal: Actualización de documentos y solvencias;
              elaboración de documentos, y acompañamiento en los procesos de
              registro y notarias.
            </li>
            <li>
              Asesoría Arquitectónica: Propuestas y presupuestos de diseño y
              renovaciones arquitectónicas.
            </li>
            <li>
              Propuestas de mobiliarios. Proyectos y ejecución de mejoras de
              los inmuebles previos al alquiler y/o venta.
            </li>
          </ul>
          <Image
            src={logo}
            alt="logo of Inmobilia Caracas"
            className="w-1/3 h-full"
          />
        </div>
      </div>
  )
}
