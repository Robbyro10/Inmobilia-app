import { AppLayout } from "@/components/layouts/AppLayout";
import { MemberGrid } from "@/components/teams";

const AboutPage = () => {
  return (
    <AppLayout
      title="Inmobilia Caracas - Nuestro Equipo"
      pageDescription="Informacion del equipo de Inmobilia Caracas"
    >
      <div className=" text-center mt-10 mb-8">
        <h1 className="text-3xl text-yellow text-center font-semibold mb-2">
          Conoce a nuestro equipo
        </h1>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum ipsam
          ullam eligendi atque nostrum dolore.
        </p>
      </div>
      <MemberGrid />
      <div className=" text-center mt-10 mb-8">
        <h1 className="text-3xl text-yellow text-center font-semibold mb-2">
          Que ofrecemos
        </h1>

        <ul className="text-white flex gap-2 flex-col mt-5">
          <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odit.</li>
          <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odit.</li>
          <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odit.</li>
          <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odit.</li>
          <li>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, odit.</li>
        </ul>
      </div>
    </AppLayout>
  );
};

export default AboutPage;
