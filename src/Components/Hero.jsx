

export default function Hero({ url }) {
    return (
        <>
        <div className="relative">
        {/* <img src={`./src/images/mfk.jpg`}alt="" className=" w-full object-cover max-[420px]:h-[200px] max-h-[500px] h-[300px] min-[872px]:h-[350px] min-[1004px]:h-[450px]"/> */}
        <img src={`/Images/mfk.jpg`}alt="" className=" w-full object-cover h-[400px] "/>
        <div className=" w-full flex justify-center">
        <button className=" bg-white font-[Montserrat] font-light py-1 border bg-opacity-85 float-right absolute top-[82%] text-xs min-[319px]:w-[80%] min-[319px]: m-auto min-[768px]:w-fit min-[768px]:left-[70%] min-[768px]: p-4 ">DISCOVER</button>
        </div>
        {/* <button className=" bg-white font-[Montserrat] font-light p-2 border mt-[-100px] ml-[70%]">DISCOVER</button>
        </div> */}
        </div>
        </>
    ) 
}