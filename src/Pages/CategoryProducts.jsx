import { useState } from "react";

export default function CategoryProducts({ item }) {
  const [secondImage, setSecondImage] = useState(false);

  return (
    <div className=" border-r">
      <div className=" pr-1 max-h-[300px] overflow-hidden">
      <img
        src={
          secondImage
            ? `/src/images/${item.imgHover}`
            : `/src/images/${item.img}`
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
        ₦{item.price}
      </h3>

      <div className=" w-full flex justify-center py-3">
        <button className=" border border-red-200 p-3 text-black text-xs w-[90%] font-normal hover:bg-[#F5F5F5]">
          ADD TO BAG
        </button>
      </div>
    </div>
  );
}
