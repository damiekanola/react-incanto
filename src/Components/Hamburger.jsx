import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCaretRight
} from "@fortawesome/free-solid-svg-icons";

export default function Hamburger({ isOpen }) {
    return (
        <>
        <div className={` w-full h-screen fixed left-0 z-30 bg-white p-5 shadow transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
                <FontAwesomeIcon icon={faCaretRight} style={{color: "#000000",}} />
                </div>
                <hr />
                <li className=" p-3">Sale!</li>
                <hr />
            </ul>

        </div>
        </>
    )
}