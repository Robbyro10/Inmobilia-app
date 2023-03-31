import Image from "next/image";
import cabin from "../../public/properties/cabin.jpg";
import chorros from "../../public/properties/losChorros.jpg";
import country from "../../public/properties/country.jpg";
import valleArriba from "../../public/properties/valleArriba.jpg";
import Link from "next/link";

const houses = [
  {
    name: "La Castellana",
    img: cabin,
    href: "/propiedades/641617e0ad56c31aac6dd2d9",
  },
  {
    name: "Los Chorros",
    img: chorros,
    href: "/propiedades/64125b28ad56c31aac6dbb35",
  },
  {
    name: "Country Club",
    img: country,
    href: "/propiedades/641605e8ad56c31aac6dcdd7",
  },
  {
    name: "Valle Arriba",
    img: valleArriba,
    href: "/propiedades/641609efad56c31aac6dcf8c",
  },
];

export const LandingHouseGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto mb-20 max-w-screen-2xl w-3/4 my-14">
      {houses.map((house) => (
        <Link
          href={house.href}
          key={house.name}
          className="flex flex-col relative justify-center items-center shadow-md group transition"
        >
          <Image
            src={house.img}
            height={500}
            alt="dark house"
            className="group-hover:contrast-50 group-hover:brightness-50 transition ease-in rounded-md shadow-md contrast-100 brightness-100 h-full"
          />
          <div className="absolute">
            <h1 className="opacity-0 group-hover:opacity-100 text-3xl font-semibold transition ease-in text-white">
              {house.name}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};
