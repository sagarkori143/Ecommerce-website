import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Homepage from "./pages/Homepage"
import { Toaster } from "react-hot-toast";
import "./pages/bg.css";


const App = () => {
  return (
    <div >
      <Toaster />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Test" element={<Homepage/>}  />
      </Routes>
    </div>
  );
};

export default App;
