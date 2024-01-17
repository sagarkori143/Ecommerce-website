import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logos from "../components/upi-apps.avif"


const Cart = () => {

 
  const [payment, setpayment] = useState(false)
  const { cart } = useSelector((state) => state);
  const [totalAmount, settotalAmount] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setpayment(true);
  };
  const url="https://upiqr.in/api/qr?name=Sagar%20Kori&vpa=9917870933@paytm&amount="+totalAmount+".00";
  console.log(url)
  useEffect(() => {
    settotalAmount(Math.floor(cart.reduce((acc, curr) => acc + curr.price, 0)));
    setpayment(false);
  }, [cart])
  return (
    <div className="relative">
      {
        cart.length > 0 ? (
          <div className="flex flex-row">
            <div className="w-2/3 border-b-4">
              {cart.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </div>

            <div className="flex  flex-col items-center w-1/3 border border-l-green-300 border-l-2">
              <div className="bg-gray-300 w-[100%] grid place-items-center">
                <div className="font-bold text-[25px]">Your Cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="grid place-items-center box-border">
                <p className="text-[20px] text-gray-800 text-center mt-2" >Total Amount:<h5>{totalAmount}₹</h5></p>
                <div className=" p-4 box-border" >{
                  payment?(
                  <motion.div className="flex flex-col items-center relative bottom-[10px]"
                  initial={{y:300,opacity:0.1}}
                  animate={{y:0,opacity:1.5}}
                  transition={{duration:0.5}}
                  >
                    <h1 >
                      Scan this QR code and make the payment !
                    </h1>
                    <img src={url} width="250px" />
                    <img src={logos} width="250px"/>
                    
                  </motion.div>
                  ):("")
                  }</div>

                <button onClick={scrollToTop} className="fixed bottom-0  bg-green-500  px-[5%]  py-[10px] mb-[10px] rounded-[28px]">
                  Checkout Now!
                </button>

              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col h-screen items-center  justify-center">
            <h1>No Items Found...</h1>
            <NavLink to="/">
              <div>
                <button className="bg-green-400 px-[100px] py-[15px] rounded-[20px]">Shop Now</button>
              </div>
            </NavLink>
          </div>
        )
      }

    </div>

  )
};

export default Cart;
