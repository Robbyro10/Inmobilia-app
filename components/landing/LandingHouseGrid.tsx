import Image from "next/image";
import cabin from "../../public/properties/cabin.jpg";
import colonial from "../../public/properties/colonial.jpg";
import whiteMansion from "../../public/properties/white-mansion.jpg";
import modernHouse from "../../public/properties/modern-house.jpg";

const houses = [
  {
    name: "La Castellana",
    img: cabin,
  },
  {
    name: "La Lagunita",
    img: colonial,
  },
  {
    name: "El Country",
    img: whiteMansion,
  },
  {
    name: "Los Palos Grandes",
    img: modernHouse,
  },
];

export const LandingHouseGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto mb-20 max-w-screen-2xl w-3/4 my-14">
      {houses.map((house) => (
        <div
          key={house.name}
          className="flex flex-col relative justify-center items-center shadow-md group transition"
        >
          <Image
            src={house.img}
            alt="dark house"
            className="group-hover:contrast-50 group-hover:brightness-50 transition ease-in rounded-md shadow-md contrast-100 brightness-100 h-full"
          />
          <div className="absolute">
            <h1 className="opacity-0 group-hover:opacity-100 text-3xl font-semibold transition ease-in text-white">{house.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
