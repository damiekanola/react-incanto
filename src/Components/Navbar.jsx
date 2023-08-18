import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faBars,
  faX
} from "@fortawesome/free-solid-svg-icons";


export default function Navbar({ handleToggle, isOpen}) {
  
  return (
    <>
      <div className=" bg-[#fcf9ee] p-5 flex justify-between items-center font-[Montserrat]">
        <ul className=" font-light flex justify-between max-[800px]:hidden">
          <li className=" pr-4">HOME</li>
          <li className="pr-4">BATH/BODY</li>
          <li>GIFT SETS</li>
        </ul>
        { isOpen?  <FontAwesomeIcon icon={faX} style={{color: "#000000",}} onClick={handleToggle}/>  : <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#000000" }}
          className=" hidden max-[800px]:block"
          onClick={handleToggle}
        />
       }
        <h1 className=" font-[360] text-3xl max-[800px]:text-2xl">
          INCANTO
        </h1>
        <div className="flex items-center justify-between">
          <div className=" bg-[#f0f0f0] rounded-2xl p-1 max-[800px]:hidden">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#000000" }}
            />
            <input
              type="text"
              className=" placeholder: p-[4px] flex-1 bg-inherit focus:outline-none"
              placeholder="Search..."
            />
          </div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#000000" }}
            className=" hidden max-[800px]:block pr-3"
          />
          <FontAwesomeIcon icon={faShoppingCart} className=" pl-4" />
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
