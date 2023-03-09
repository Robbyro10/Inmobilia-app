import { AppLayout } from "@/components/layouts/AppLayout";
import { MemberGrid, OfferingCard } from "@/components/teams";

const AboutPage = () => {
  return (
    <AppLayout
      title="Inmobilia Caracas - Nuestro Equipo"
      pageDescription="Información del equipo de Inmobilia Caracas"
    >
      <div className=" text-center mt-14 mb-8 text-yellow">
        <h1 className="text-3xl  font-semibold mb-2">
          Conoce a nuestro equipo
        </h1>
        <hr className="w-2/3 mx-auto mt-5"/>
      </div>
      <MemberGrid />

      <OfferingCard />
    </AppLayout>
  );
};

export default AboutPage;
