import { Outlet } from "react-router-dom";
import Mains from "./Mains";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Carosel from "./Carosel";
import Chef from "./Chef";


const Homemain = () => {
    return (
        <div>
          <Navbar></Navbar>
          
           <Outlet></Outlet>
           
           <Footer></Footer> 
        </div>
    );
};

export default Homemain;