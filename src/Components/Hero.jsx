import { Carousel } from "flowbite-react";
import { Flowbite } from 'flowbite-react';

const customTheme  = {
  carousel: {
    scrollContainer: {
      new: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    },
  },
};
import ".././Custom.css"
import { Link } from "react-router-dom";



export default function Hero() {
    return (
        <>
        <div className="relative">
        {/* <img src={`./src/images/mfk.jpg`}alt="" className=" w-full object-cover max-[420px]:h-[200px] max-h-[500px] h-[300px] min-[872px]:h-[350px] min-[1004px]:h-[450px]"/> */}
        <Flowbite theme={{ theme: customTheme }}>
        <Carousel className="h-[450px]" scrollContainer="new" slideInterval={5000} indicators={false} slide={true} leftControl=" " rightControl=' '>
        <img src={`/Images/mfk.jpg`}alt="" className=" w-full object-cover h-[450px] "/>
        <img src="/Images/jo malone cologne.jpg" alt="" className=" w-full object-cover h-[450px]" />
        <img src="/Images/jo malone.jpg" alt="" className=" w-full object-cover h-[450px]" />
        <img src="/Images/mfk 2.jpg" alt="" className=" w-full object-cover h-[450px]" />
        </Carousel>
        </Flowbite>
       <Link to={"/categories"} >
      
        <div className=" w-full flex justify-center">
          
           
        <button className=" bg-white font-[Montserrat] font-light py-1 border bg-opacity-85 float-right absolute top-[82%] text-xs min-[319px]:w-[80%] min-[319px]: m-auto min-[768px]:w-fit min-[768px]:left-[70%] min-[768px]: p-4 ">DISCOVER</button>
        
        </div>
        </Link>
        {/* <button className=" bg-white font-[Montserrat] font-light p-2 border mt-[-100px] ml-[70%]">DISCOVER</button>
        </div> */}
        </div>
        </>
    ) 
}