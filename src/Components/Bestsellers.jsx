import Bestseller from "./Bestseller"
import data from "../../data.json"
import { Link } from "react-router-dom"

export default function BestsellersList() {
    return (
        <>
        <div  className="max-[769px]:px-10 px-20 pt-20 overflow-hidden max-[426px]:p-5 font-[Montserrat]">
         <h1 className=" font-light text-3xl max-[562px]:text-2xl uppercase">
          Best Sellers
        </h1>
        <div className=" pt-20 flex flex-nowrap overflow-x-auto gap-5 scrollbar-hide">
          {data.bestsellers.map((item) => (
            <Link key={item.name} to={`/productpage/${item.tag}/${item.id}`}>
             <Bestseller
              name={item.name}
              key={item.name}
              img={item.img}
              price={item.price}
            />
            </Link>
           
          ))}
        </div>
        </div>
        </>
    )
}