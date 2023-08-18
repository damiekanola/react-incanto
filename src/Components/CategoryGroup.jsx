export default function CategoryGroup({ name, url }) {
    return (
        <>
        <div className=" pb-20 font-light text-xl">
            <div className="">
            <img src={`/Images/${url}`} alt="" className="transition-transform transform-gpu hover:scale-105" />
            </div>
            <p className="text-center p-4">{name}</p>
        </div>
        </>
    )
}