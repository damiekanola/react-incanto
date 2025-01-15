"use client";
import Navbar from "../Components/Navbar";
import FooterWithSocialMediaIcons from "../Components/Footer";
import data from "../../data.json";
import { CartState } from "../Context/Context";
import { Carousel } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ProductPage() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  const { tag, id } = useParams();
  console.log(id);
  const product = data[tag].find((product) => product.id === parseInt(id));
  console.log(product);

  const price100ml = product.prices.find(
    (sizeInfo) => sizeInfo.size === "100ml"
  ).price;

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(price100ml);

  function handleButton(buttonName, sizePrice) {
    setSelectedButton(buttonName);
    setSelectedPrice(sizePrice);
  }

  return (
    <>
      <Navbar />
      <div className=" pt-10 px-10 grid grid-cols-2 gap-12 max-[805px]:hidden">
        <div className=" aspect-square">
          <Carousel
            slide={false}
            leftControl="&larr;"
            rightControl="&rarr;"
            className=" rounded-none"
          >
            <img src={`/Images/${product.img}`} alt="" />
            <img src={`/Images/${product.img}`} alt="" />
            <img src={`/Images/${product.img}`} alt="" />
            <img src={`/Images/${product.img}`} alt="" />
          </Carousel>
        </div>

        <div className=" my-auto">
          <h1 className=" uppercase text-6xl pb-2">{product.name}</h1>

          <hr />
          <h3 className=" py-5 text-2xl">₦{selectedPrice}</h3>
          <div className="flex">
            {product.prices.map((sizeInfo) => (
              <button
                key={sizeInfo.size}
                className={`border border-red-200 p-2 ${
                  selectedButton === sizeInfo.size
                    ? " bg-pink-500 text-black"
                    : ""
                } mr-3`}
                onClick={() => handleButton(sizeInfo.size, sizeInfo.price)}
              >
                {sizeInfo.size}
              </button>
            ))}
          </div>
          <p className=" py-8 text-lg">{product.description}</p>

          <div className="flex items-center">
            <button
              className=" border border-red-200 p-3 m-auto w-full"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: { ...product, selectedPrice: selectedPrice },
                });
              }}
            >
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
          <Carousel
            slide={false}
            leftControl="&larr;"
            rightControl="&rarr;"
            className=" rounded-none"
          >
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

        <h3 className=" py-5 text-2xl">₦{selectedPrice}</h3>
        <div className="flex mb-4 m-auto">
          {product.prices.map((sizeInfo) => (
            <button
              key={sizeInfo.size}
              className={`border border-red-200 p-2 ${
                selectedButton === sizeInfo.size
                  ? " bg-pink-500 text-black"
                  : ""
              } mr-3`}
              onClick={() => handleButton(sizeInfo.size, sizeInfo.price)}
            >
              {sizeInfo.size}
            </button>
          ))}
        </div>
        <button
          className=" border border-red-200 p-3 m-auto w-full"
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              payload: { ...product, selectedPrice: selectedPrice },
            });
          }}
        >
          ADD TO CART
        </button>

        <div className=" mt-6">
          <h3 className=" uppercase py-1">Description</h3>
          <hr />
          <p className=" py-2 text-lg">{product.description}</p>
        </div>
      </section>

      <FooterWithSocialMediaIcons />
    </>
  );
}
