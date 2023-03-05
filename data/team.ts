import { StaticImageData } from "next/image";
import ana from "../public/team/anaFront.png";
import isabel from "../public/team/isabelCaleya.jpg";

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
    desc: "Something in the game what??",
    img: ana,
    email: "inmobiliacaracas@gmail.com",
    instagram: "@inmobiliacaracas",
    phone: "+58412-2291851",
  },
  {
    id: 2,
    name: "Isabel Caleya",
    title: "Asesor y arquitecto",
    desc: "Arquitecto de la UCV de reconocida trayectoria en Caracas, Bogotá y México, especializada en proyectos y remodelaciones de alto nivel arquitectónico y gusto en diseños naturalistas y minimalistas., se une en alianza estratégica a Inmobilia Caracas.",
    img: isabel,
    email: "caleyaisabelarq@gmail.com",
    instagram: "@caleyaisabelarquitectura",
    phone: "+58412-3323332",
  },
  {
    id: 3,
    name: "Gaby Prato",
    title: "Asesor junior",
    desc: "Somthing in the way of the thing",
    img: ana,
    email: "",
    instagram: "",
    phone: "",
  },
];
