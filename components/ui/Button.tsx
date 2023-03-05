import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, PropsWithChildren } from "react";

interface Props {
  text: string;
  href?: string;
}

export const Button: FC<Props> = ({ text, href }) => {
  const router = useRouter();
  const handleClick = () => {
    if (href) router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className="text-white px-4 py-2 border rounded-md font-semibold transition ease-in hover:bg-white hover:text-blue hover:border-white"
    >
      {text}
    </button>
  );
};
