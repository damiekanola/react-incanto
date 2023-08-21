import Navbar from "../Components/Navbar";
import FooterWithSocialMediaIcons from "../Components/Footer";
import data from "../../data.json";

import CategoryProducts from "./CategoryProducts";
import { useParams } from "react-router-dom";

export default function CategoryProductPage() {
  const { gender } = useParams();
  console.log(gender);

  const product = data.gender.find(
    (product) => product.id === parseInt(gender)
  );
  console.log(product);
  const length = product.length;
  return (
    <>
      <Navbar />
      <img
        src="/Images/good fortune.jpg"
        alt=""
        className="px-32 max-[893px]:px-10 object-cover max-[640px]:hidden"
      />

      <div className=" hidden  max-[640px]:block">
        <h1 className=" py-2 bg-black text-white pl-1">
          {product.name} FRAGRANCES
        </h1>
        <select
          name=""
          id="filter"
          className=" w-full uppercase p-2 border-b border-black"
        >
          <option value="">Latest</option>
          <option value="">Price: Low to High</option>
          <option value="">Price: High to Low</option>
        </select>
      </div>

      <div className=" px-32 max-[893px]:px-10 max-[640px]:px-5">
        <div className=" flex justify-between items-center max-[640px]:hidden">
          <p className=" uppercase py-4 text-xl ">
            {product.name} FRAGRANCES ({length})
          </p>
        </div>

        <hr className="max-[640px]:hidden" />
        <ul className=" grid grid-cols-4 gap-y-10 gap-x-7 pt-5 max-[893px]:grid-cols-3 max-[640px]:grid-cols-2 max-[523px]:grid-cols-2">
          {data[product.pointer].map((item) => (
            <CategoryProducts
              key={item.id}
              item={item}
              product={[product.pointer]}
            />
          ))}
        </ul>
      </div>
      <FooterWithSocialMediaIcons />
    </>
  );
}
