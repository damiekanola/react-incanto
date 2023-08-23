import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
  faX
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { CartState } from "../Context/Context";


export default function Navbar() {
  const {
    state: { cart },
    
  } = CartState();
  return (
    <>
      <div className=" bg-[#fcf9ee] p-5 flex justify-between items-center font-[Montserrat]">
        <ul className=" font-light flex justify-between max-[800px]:hidden">
          <li className=" pr-4">HOME</li>
          <li className="pr-4">BATH/BODY</li>
          <li>GIFT SETS</li>
        </ul>
         <Hamburger />
       
       <Link to={"/"}>
       <h1 className=" font-[360] text-3xl max-[800px]:text-2xl">
          INCANTO
        </h1>
       </Link>
       
        <div className="flex items-center justify-between">
          <div className=" bg-[#f0f0f0] rounded-2xl p-1 max-[800px]:hidden">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#000000" }}
            />
            <input
              type="text"
              className=" placeholder: p-[4px] flex-1 bg-inherit outline-none focus:outline-none border-none focus:border-none"
              placeholder="Search..."
            />
          </div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#000000" }}
            className=" hidden max-[800px]:block pr-3"
          />
          <Link to={"/cart"}>
            <div className=" relative">
          <FontAwesomeIcon icon={faShoppingCart} className=" pl-4" />
          {cart.length >= 1 && <span className=" bg-slate-200 rounded-full p-[2px] text-xs absolute top-[-6px]">{cart.length}</span>}
          </div>
          </Link>
        </div>
      </div>
      {/* <div className=" w-[200px] relative top-[-70px] z-[1]">
        <ul className=" w-full">
          <li className=" p-5">WOMEN</li>
          <li className=" p-5">MEN</li>
          <li className=" p-5">BATH/BODY</li>
          <li className=" p-5">GIFT SET</li>
        </ul>
      </div> */}
    </>
  );
}
