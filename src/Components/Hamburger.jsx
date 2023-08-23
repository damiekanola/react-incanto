import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger() {
  const [hamburger, setHamburger] = useState(false);

  const toggleMenu = () => {
    setHamburger(prev => !prev);
  };
  return (
    <>
      {hamburger ? (
        <FontAwesomeIcon
          icon={faX}
          style={{ color: "#000000" }}
          className=" hidden max-[800px]:block"
          onClick={toggleMenu}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "#000000" }}
          className=" hidden max-[800px]:block"
          onClick={toggleMenu}
        />
      )}

      {hamburger && (
        <div
          className={`${ hamburger ? 'block' : 'hidden'} w-full h-screen absolute left-0 z-30 top-[4rem] bg-white p-5 shadow`}
        >
          <ul className=" uppercase text-xl ">
            <li className=" p-3">Women</li>
            <hr />
            <li className=" p-3">Men</li>
            <hr />
            <li className=" p-3">Gift/Sets</li>
            <hr />
            <li className=" p-3">Bath and Body</li>
            <hr />
            <div className="flex justify-between items-center py-2">
              <li className=" p-3">Olfactory Groups</li>
              <FontAwesomeIcon
                icon={faCaretRight}
                style={{ color: "#000000" }}
              />
            </div>
            <hr />
            <li className=" p-3">Sale!</li>
            <hr />
          </ul>
        </div>
      )}
    </>
  );
}
