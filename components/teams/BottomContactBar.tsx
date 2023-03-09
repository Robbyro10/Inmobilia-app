import Link from "next/link";
import React from "react";

export const BottomContactBar = () => {
  return (
    <div className="bg-dark-blue fixed bottom-0 w-full py-4 flex justify-center items-center z-50 md:hidden">
      <Link
        href="/#contact"
        className="bg-yellow text-center py-2 px-4 rounded shadow-md w-fit"
      >
        Contáctanos para hacer una visita
      </Link>
    </div>
  );
};
