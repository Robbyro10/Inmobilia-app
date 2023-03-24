import { StaticImageData } from "next/image";
import ana from "../public/team/anaFront.png";
import isabel from "../public/team/isabelCaleya.jpg";
import gaby from "../public/team/gaby.jpeg";

export interface IMember {
  id: number;
  name: string;
  title: string;
  desc: string;
  img: StaticImageData;
  instagram: string;
  email: string;
  phone: string;
}

export const team: IMember[] = [
  {
    id: 1,
    name: "Ana Maria Palacios",
    title: "Asesor principal",
    desc: "Abogada de la Universidad Católica Andrés Bello, dedicada al sector de bienes y raíces en la ciudad de Caracas, desde el año 2014. Certificación obtenida como Profesional Inmobiliario de la Cámara Inmobiliaria de Venezuela, año 2021 (modalidad Preani). Con amplia experiencia en el mundo corporativo, ejerzo esta profesión apoyada en la premisa de las buenas relaciones sociales y comerciales. Soy practicante regular de golf y yoga.",
    img: ana,
    email: "inmobiliacaracas@gmail.com",
    instagram: "@inmobiliacaracas",
    phone: "+58 412-2291851",
  },
  {
    id: 2,
    name: "Isabel Caleya",
    title: "Asesor y arquitecto",
    desc: "Arquitecto de la UCV de reconocida trayectoria en Caracas, Bogotá y México, especializada en proyectos y remodelaciones de alto nivel arquitectónico y gusto en diseños naturalistas y minimalistas., se une en alianza estratégica a Inmobilia Caracas.",
    img: isabel,
    email: "caleyaisabelarq@gmail.com",
    instagram: "@caleyaisabelarquitectura",
    phone: "+58 412-3323332",
  },
  {
    id: 3,
    name: "Gaby Prato",
    title: "Asesor",
    desc: "Comunicadora Social egresada de la Universidad Católica Andrés Bello. Especializada en el área de Relaciones Públicas y Comunicaciones. Apasionada de la lectura, de la escritura y de la comunicación.",
    img: gaby,
    email: "prato.mari@gmail.com",
    instagram: "",
    phone: "+58 412-6203528",
  },
];
