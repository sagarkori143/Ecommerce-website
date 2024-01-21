import React, { useState, useEffect } from "react";

const SectionProduct = ({ data }) => {
  const [productData, setProductData] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    setProductData(data);
    setLoading(false);
  }, [data]);

  console.log("product data: ", productData);

  return (
    <div className="flex flex-col align-center m-2 w-[200px] h-[300px] hover:scale-[104%] transition-all">
      {Loading ? (
        <p>No data available</p>
      ) : (
        <>
          <div>{<img src={productData.image} className="w-cover" />}</div>
          <div className="font-semibold text-center">{productData.title.slice(0,15)+"..."}</div>
          <div>
            <h4>{`Price: ${productData.newprice} | Cut Price: ${productData.oldprice} | % Off: ${productData.discount}`}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default SectionProduct;
