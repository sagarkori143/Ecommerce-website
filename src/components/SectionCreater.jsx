import React from "react";
import SectionProduct from "./SectionProduct";

const SectionCreator = (sectiondata) => {
  console.log(sectiondata);
  return (
    <div className="border-green-400 border-2">
      <div>
        <h4>Starting here</h4>
        <h2>{sectiondata.header}</h2>
      </div>
      <div className="flex gap-1">
        {sectiondata.Content.map((card) => (
          <sectionProduct data={card} key={card.id} />
        ))}
      </div>
    </div>
  );
};

export default SectionCreator;
