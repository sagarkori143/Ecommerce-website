import React from 'react';
import under99 from "../assets/under99.jpg";
import under199 from "../assets/under199.jpg";
import under299 from "../assets/under299.jpg";
import under599 from "../assets/under599.jpg";
import under799 from "../assets/under799.jpg";

const PriceMart = () => {
  return (
    <div className="flex justify-around items-center">
      <img className="max-w-[20%] max-h-[20%] h-full object-fit-contain hover:scale-105 transition-all cursor-pointer" src={under99} alt='under99' />
      <img className="max-w-[20%] max-h-[20%] h-full object-fit-contain hover:scale-105 transition-all cursor-pointer" src={under199} alt='under199' />
      <img className="max-w-[20%] max-h-[20%] h-full object-fit-contain hover:scale-105 transition-all cursor-pointer" src={under299} alt='under299' />
      <img className="max-w-[20%] max-h-[20%] h-full object-fit-contain hover:scale-105 transition-all cursor-pointer" src={under599} alt='under599' />
      <img className="max-w-[20%] max-h-[20%] h-full object-fit-contain hover:scale-105 transition-all cursor-pointer" src={under799} alt='under799' />
    </div>
  );
}

export default PriceMart;
