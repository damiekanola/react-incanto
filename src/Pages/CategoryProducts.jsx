import { useState } from "react";
import { CartState } from "../Context/Context";
import { Link } from "react-router-dom";

export default function CategoryProducts({ item }) {
  const [secondImage, setSecondImage] = useState(false);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);
  const price100ml = item.prices.find((sizeInfo) => sizeInfo.size === "100ml").price;

  return (
    <li className=" border-r">
      <Link to={`/productpage/${item.tag}/${item.id}`}>
        <div className=" pr-1 max-h-[300px] overflow-hidden">
          <img
            src={
              secondImage ? `/Images/${item.imgHover}` : `/Images/${item.img}`
            }
            alt=""
            className="w-full aspect-square"
            onMouseEnter={() => setSecondImage((prev) => !prev)}
            onMouseLeave={() => setSecondImage((prev) => !prev)}
          />
        </div>
        <h3 className=" text-center text-lg p-2 uppercase font-normal max-[523px]:text-sm">
          {item.name}
        </h3>
        <h3 className=" text-center text-lg p-2 font-normal max-[523px]:text-sm">
          ₦{price100ml}
        </h3>
      </Link>

      <div className=" w-full flex justify-center py-3">
        <button
          className=" border border-red-200 p-3 text-black text-xs w-[90%] font-normal hover:bg-[#F5F5F5]"
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: item,
            });
          }}
        >
          ADD TO BAG
        </button>
      </div>
    </li>
  );
}
