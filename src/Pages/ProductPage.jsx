"use client";
import Navbar from "../Components/Navbar";
import FooterWithSocialMediaIcons from "../Components/Footer";
import data from "../../data.json";
import { Carousel } from "flowbite-react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { tag, id } = useParams();
  console.log(id);
  const product = data[tag].find((product) => product.id === parseInt(id));
  console.log(product);
  

  const leftArrow = {
    // Your desired styles for the left arrow
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold',
    // ... add more styles as needed
  };
  return (
    <>
      <Navbar />
      <div className=" pt-10 px-10 grid grid-cols-2 gap-12 max-[805px]:hidden">
        <div className=" aspect-square">
          <Carousel indicators={leftArrow}>
          <img src={`/Images/${product.img}`} alt="" className="" />
          <img src={`/Images/${product.img}`} alt="" className="" />
          <img src={`/Images/${product.img}`} alt="" className="" />
          <img src={`/Images/${product.img}`} alt="" className="" />
          </Carousel>
        </div>

        <div className=" my-auto">
          <h1 className=" uppercase text-6xl pb-2">{product.name}</h1>

          <hr />
          <h3 className=" py-5 text-2xl">₦{product.price}</h3>
          <div className="flex">
            <button className=" border p-2 border-red-200 mr-3">10ml</button>
            <button className=" border p-2 border-red-200 mr-3">50ml</button>
            <button className=" border p-2 border-red-200 ">100ml</button>
          </div>
          <p className=" py-8 text-lg">{product.description}</p>

          <div className="flex items-center">
            <button className=" border border-red-200 p-3 m-auto w-full">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <section className="px-14 py-5 hidden max-[805px]:block max-[696px]:px-10 max-[453px]:px-5 font-[Montserrat]">
        <h1 className=" uppercase text-4xl mb-3 max-[530px]:text-3xl max-[200px]:text-left">
          {product.name}
        </h1>
        <hr />

        <div className=" aspect-square">

        <Carousel slide={false} leftControl="&larr;" rightControl="&rarr;" >
          <img
            src={`/Images/${product.img}`}
            alt=""
            className=" mb-4 px-10 max-[453px]:px-0 object-cover"
          />
          <img
            src={`/Images/${product.img}`}
            alt=""
            className=" mb-4 px-10 max-[453px]:px-0"
          />
          <img
            src={`/Images/${product.img}`}
            alt=""
            className=" mb-4 px-10 max-[453px]:px-0"
          />
          <img
            src={`/Images/${product.img}`}
            alt=""
            className=" mb-4 px-10 max-[453px]:px-0"
          />
        </Carousel>
        </div>

        <h3 className=" py-5 text-2xl">₦{product.price}</h3>
        <div className="flex mb-4 m-auto">
          <button className=" border p-2 border-red-200 mr-3" value={10}>
            10ml
          </button>
          <button className=" border p-2 border-red-200 mr-3" value={50}>
            50ml
          </button>
          <button className=" border p-2 border-red-200 " value={100}>
            100ml
          </button>
        </div>
        <button className=" border border-red-200 p-3 m-auto w-full">
          ADD TO CART
        </button>

        <div className=" mt-6">
          <h3 className=" uppercase py-1">Description</h3>
          <hr />
          <p className=" py-2 text-lg">{product.description}</p>
        </div>
      </section>

      <FooterWithSocialMediaIcons/>
    </>
  );
}

