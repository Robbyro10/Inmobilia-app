import { team } from "@/data";
import React from "react";
import { MemberCard } from "./MemberCard";

export const MemberGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-20">
      {team.map((member) => (
        <MemberCard
          name={member.name}
          title={member.title}
          desc={member.desc}
          phone={member.phone}
          img={member.img}
          key={member.name}
          id={0}
          instagram={member.instagram}
          email={member.email}
        />
      ))}
    </div>
  );
};
