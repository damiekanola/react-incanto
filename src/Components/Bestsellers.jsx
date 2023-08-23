import Bestseller from "./Bestseller"
import data from "../../data.json"
import { Link } from "react-router-dom"

export default function BestsellersList() {
    return (
        <>
        <div  className="max-[769px]:px-8 px-12 pt-16 overflow-hidden max-[426px]:p-5 font-[Montserrat]">
         <h1 className=" font-light text-3xl max-[562px]:text-2xl uppercase pt-5">
          Best Sellers
        </h1>
        <ul className=" pt-8 flex flex-nowrap overflow-x-auto gap-3 scrollbar-hide">
          {data.bestsellers.map((item) => (
            <Link key={item.name} to={`/productpage/${item.tag}/${item.id}`}>
             <Bestseller
             key={item.id}
              item={item}
            />
            </Link>
           
          ))}
        </ul>
        </div>
        </>
    )
}