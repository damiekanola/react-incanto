import { Carousel, Flowbite } from "flowbite-react";
import { Link } from "react-router-dom";

const customTheme = {
  carousel: {
    scrollContainer: {
      new: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    },
  },
};
import ".././Custom.css";

export default function Hero() {
  const carouselImages = [
    "/Images/mfk.jpg",
    "/Images/jo malone cologne.jpg",
    "/Images/jo malone.jpg",
    "/Images/mfk 2.jpg",
  ];

  return (
    <>
      <div className="relative">
        {/* <img src={`./src/images/mfk.jpg`}alt="" className=" w-full object-cover max-[420px]:h-[200px] max-h-[500px] h-[300px] min-[872px]:h-[350px] min-[1004px]:h-[450px]"/> */}
        <Flowbite theme={{ theme: customTheme }}>
          <Carousel
            className="h-[450px]"
            scrollContainer="new"
            slideInterval={5000}
            indicators={false}
            slide={true}
            leftControl=" "
            rightControl=" "
          >
            {carouselImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full object-cover h-[450px]"
              />
            ))}
          </Carousel>
        </Flowbite>
        <Link to={"/categories"}>
          <div className=" w-full flex justify-center">
            <button className=" bg-white font-[Montserrat] font-light py-1 border bg-opacity-85 float-right absolute top-[82%] text-xs min-[319px]:w-[80%] min-[319px]: m-auto min-[768px]:w-fit min-[768px]:left-[70%] min-[768px]: p-4 ">
              DISCOVER
            </button>
          </div>
        </Link>
        {/* <button className=" bg-white font-[Montserrat] font-light p-2 border mt-[-100px] ml-[70%]">DISCOVER</button>
        </div> */}
      </div>
    </>
  );
}
