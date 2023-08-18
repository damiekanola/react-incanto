export default function Bestseller({ img, name, price }) {
    return (
        <div className=" font-light min-w-[250px] max-[426px]:min-w-[140px]">
        <img src={`/images/${img}`} alt="" className=" w-full" />
        <p className=" text-l text-center p-4 uppercase">{name}</p>
        <p className=" text-center">₦{price}</p>
    </div>
    )
}