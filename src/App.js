import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import { Toaster } from "react-hot-toast";
import "./pages/bg.css";

const App = () => {
  return (
    <div className="kori">
      <Toaster />
      <div className="bg-slate-800 text-white">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </div>
  ); 
};

export default App;
