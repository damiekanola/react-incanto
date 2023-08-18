import { Link } from "react-router-dom";
import CategoryGroup from "./CategoryGroup";
import data from "../../data.json"

export default function ExploreByCategory() {
  return (
    <secion className="p-10">
      <p className=" font-light text-3xl max-[426px]:text-2xl pt-10">
        Explore By Category
      </p>
      <div className="pt-10 grid grid-cols-3 max-[620px]:grid-cols-2 max-[430px]:grid-cols-1 gap-5 ">
        {data.gender.map((item) => (
            <Link key={item.name} to={`${item.to}/${item.id}`}>
          <CategoryGroup name={item.name} url={item.url} />
            </Link>
        ))}
      </div>
    </secion>
  );
}
