export default function NewProducts({ name, url, price}) {
    return (
        <div className="font-light min-w-[250px] max-[426px]:min-w-[140px]">
            <img src={`./src/images/${url}`} alt="" className=" w-full" />
            <p className=" text-l text-center p-4">{name}</p>
            <p className=" text-center">₦{price}</p>
        </div>
    )
}