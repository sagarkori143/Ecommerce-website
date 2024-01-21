import React, { useState, useEffect } from "react";
import SectionProduct from "./SectionProduct";
import MoreProductsButton from "./MoreProductsButton";

const SectionCreator = ({ sectiondata }) => {
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    // Update sectionData when sectiondata prop changes
    const visible = (sectiondata.Content || []).slice(0, 6);
    setSectionData(visible);
  }, [sectiondata.Content]);

  return (
    <div className="flex flex-col box-border  p-2 m-[20px] w-[99%] h-[350px]">
      <div className="flex justify-between px-2 items-center">
        <div className="text-[27px] font-sans font-semibold ">
          {sectiondata.Header}
        </div>
        <div className="mt-1">
          <MoreProductsButton />
        </div>
      </div>
      <div className="flex bg-cardsColor py-3 ">
        {sectionData.length > 0 ? (
          sectionData.map((card) => (
            <SectionProduct data={card} key={card.id} />
          ))
        ) : (
          <p>No content available</p>
        )}
      </div>
    </div>
  );
};

export default SectionCreator;
