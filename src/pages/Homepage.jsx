import React from "react";
import {SectionCreator} from "../components/SectionCreater"
import material from "../components/homepage.json";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center bg-green-400 h-[1000px]">
      <h1>Kori ka page</h1>
      <div>
        {material.map((section) => (
          <SectionCreator sectiondata={section} key={section.id} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
