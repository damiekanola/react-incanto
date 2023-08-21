export default function Bestseller({ img, name, price }) {
    return (
        <li className=" font-light min-w-[220px] max-[426px]:min-w-[190px]">
        <img src={`/Images/${img}`} alt="" className=" w-full" />
        <p className=" text-l text-center p-4 uppercase">{name}</p>
        <p className=" text-center">₦{price}</p>
    </li>
    )
}