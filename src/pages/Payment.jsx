import React from 'react';
import upi from "../components/upi-App-wise-2023-Jan-ftr.webp"


export default function Payment() {
    return (
        <div className='relative'>
            <h1 className='bg-green-300 text-center font-semibold py-3 text-[20px]'>Scan the QR code and Pay the Amount</h1>
            <div>
                <img src={upi}  />
            </div>
            <div className='absolute left-[9%] top-[55%]'>
                
            </div>


        </div>
    )
}
