import NewProducts from "./NewProducts";
import ExploreByCategory from "./ExploreByCategory";
import data from "../../data.json"
import { Link } from "react-router-dom";


export default function NewRealeases() {
  return (
    <>
      <div className="max-[769px]:px-10 px-20 pt-20 overflow-hidden max-[426px]:p-5 font-[Montserrat]">
        <ExploreByCategory />
        <h1 className=" font-light text-3xl max-[562px]:text-2xl uppercase">
          New Releases
        </h1>
        <div className=" pt-20 flex flex-nowrap overflow-x-auto gap-5 scrollbar-hide">
          {data.newreleases.map((item) => (
            <Link key={item.id} to={`/productpage/${item.tag}/${item.id}`}>
            <NewProducts
              name={item.name}
              url={item.url}
              price={item.price}
            />
            </Link>
            
          ))}
        </div>
      </div>
    </>
  );
}
