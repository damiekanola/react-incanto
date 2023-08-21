export default function NewProducts({ name, url, price}) {
    return (
        <li className="font-light min-w-[250px] max-[426px]:min-w-[140px]">
            <img src={`/Images/${url}`} alt="" className=" w-full" />
            <p className=" text-l text-center p-4">{name}</p>
            <p className=" text-center">₦{price}</p>
        </li>
    )
}