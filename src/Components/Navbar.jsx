import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
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
      <nav className=" bg-[#fcf9ee] p-5 flex justify-between items-center font-[Montserrat]">
        <ul className=" font-light flex justify-between max-[800px]:hidden">
          <li className=" pr-4">HOME</li>
          <li className="pr-4">BATH/BODY</li>
          <li>GIFT SETS</li>
        </ul>
        <Hamburger />

        <Link to={"/"}>
          <h1 className=" font-[360] text-3xl max-[800px]:text-2xl">INCANTO</h1>
        </Link>

        <ul className="flex items-center">
          <li className=" bg-[#f0f0f0] rounded-lg overflow-hidden flex items-center max-[800px]:hidden">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#000000" }}
              className=" ml-2"
            />
            <input
              type="text"
              className=" ml-2 placeholder: p-[4px] flex-1 bg-inherit outline-none focus:outline-none border-none focus:border-none"
              placeholder="Search..."
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#000000" }}
              className=" hidden max-[800px]:block pr-3"
            />
          </li>
          <li>
            <Link to={"/cart"}>
              <div className=" relative">
                <FontAwesomeIcon icon={faShoppingCart} className=" pl-3" />
                {cart.length >= 1 && (
                  <span className=" bg-slate-200 rounded-full p-[2px] text-xs absolute top-[-6px]">
                    {cart.length}
                  </span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
