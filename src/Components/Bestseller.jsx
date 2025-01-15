export default function Bestseller({ item }) {
  const price100ml = item.prices.find(
    (sizeInfo) => sizeInfo.size === "100ml"
  ).price;

  return (
    <li className=" font-light min-w-[220px] max-[426px]:min-w-[190px]">
      <img src={`/Images/${item.img}`} alt="" className=" w-full" />
      <p className=" text-l text-center p-4 uppercase">{item.name}</p>
      <p className=" text-center">₦{price100ml}</p>
    </li>
  );
}
