import React from 'react'

const SectionProduct = ({ data }) => {
  return (
    <div className='flex flex-col align-center'>
      <div>
        Image
      </div>
      <div>
        Title
      </div>
      <div>
        <h4>{`Price: ${data.newprice} | Cut Price: ${data.oldprice} | % Off: ${data.discount}`}</h4>
      </div>
    </div>
  );
}

export default SectionProduct;
