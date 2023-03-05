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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 mb-20 max-w-screen-2xl">
      {houses.map((house) => (
        <div
          key={house.name}
          className="flex flex-col relative justify-center items-center shadow-md"
        >
          <Image
            src={house.img}
            alt="dark house"
            className="contrast-50 brightness-50 rounded-md shadow-md"
          />
          <div className="absolute">
            <h1 className="text-3xl font-semibold text-white">{house.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
