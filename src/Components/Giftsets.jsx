export default function Giftsets() {
  return (
    <>
      <div className="py-20 grid grid-cols-2  max-[811px]:grid-cols-1 max-[811px]:px-5 font-[Montserrat]">
        <img src="/images/ysl asian.jpg" alt="" />
        <div className=" self-center max-[811px]: pt-10">
          <p className=" text-6xl font-[500] pb-4">EXPLORE GIFT SETS</p>
          <p className=" py-4 text-xl">
            Elevate your gifting experience with meticulously curated
            fragrances, thoughtfully presented to delight your loved ones
          </p>
          <div className=" w-full  max-[811px]:p-0">
            <button className=" p-2 bg-[#FF8FAB] text-xl">
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
