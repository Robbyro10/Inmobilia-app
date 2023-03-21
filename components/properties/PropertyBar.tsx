import { IProperty } from "@/interfaces";
import { FC } from "react";
import { FaBath, FaCarSide } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";

interface Props {
  property: IProperty;
}

export const PropertyBar: FC<Props> = ({ property }) => {
  return (
    <div className="border-white border-y">
    <div className="text-white flex justify-around items-center py-3  max-w-screen-xl mx-auto">
      <div>
        <h1 className="text-yellow font-semibold text-xl md:text-3xl capitalize">
          {property.address}
        </h1>
        <h2 className="text-md md:text-xl">{property.type}</h2>
      </div>
      <div className="text-center hidden md:block">
        <h2 className="text-yellow text-2xl">Construcción</h2>
        <p>{property.size} mts^2</p>
      </div>
      {(property.terrain && property.terrain !== 0) ? (
        <div className="text-center hidden md:block">
          <h2 className="text-yellow text-2xl">Terreno</h2>
          <p>{property.terrain} mts^2</p>
        </div>
      ) : <></>}
      <div className="flex gap-8 items-center text-white text-center text-xl">
        <div>
          <FaBath className="text-yellow" />
          <h2>{property.bath}</h2>
        </div>
        <div>
          <IoIosBed className="text-yellow" />
          <h2>{property.rooms}</h2>
        </div>
        <div>
          <FaCarSide className="text-yellow" />
          <h2>{property.parking}</h2>
        </div>
      </div>
    </div>

    </div>
  );
};
