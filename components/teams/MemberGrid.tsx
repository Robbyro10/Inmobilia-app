import { team } from "@/data";
import React from "react";
import { MemberCard } from "./MemberCard";

export const MemberGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl md:w-3/4 mx-auto mb-10">
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
