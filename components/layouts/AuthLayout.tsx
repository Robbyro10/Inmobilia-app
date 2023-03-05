import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
}

export const AuthLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div className="flex justify-center items-center h-screen">

        {children}
        </div>
      </main>
    </>
  );
};
