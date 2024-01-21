import React from "react";
import SectionCreator from "../components/SectionCreater";
import material from "../components/homepage.json";
import PriceMart from "../components/PriceMart";
import banner from "../assets/ServicesBanner.jpg";
import Nav from "../components/Nav";

const Homepage = () => {
  return (
    <div className="flex flex-col  bg-bgColor items-center min-h-screen overflow-hidden">
      <div className="">
        <Nav />
      </div>
      <div className="flex-shrink-0">
        <PriceMart />
      </div>
      <div className="m-3">
        <img src={banner} className="max-h-[170px] w-full object-cover" />
      </div>
      <div className="flex flex-col flex-grow justify-center">
        {material.map((section) => (
          <SectionCreator sectiondata={section} key={section.id} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
