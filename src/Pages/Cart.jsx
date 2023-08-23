import Navbar from "../Components/Navbar";
import { CartState } from "../Context/Context";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterWithSocialMediaIcons from "../Components/Footer";
import { useEffect, useState } from "react";

const Cart = () => {
  

  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

 

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.selectedPrice) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <Navbar />
      {cart.length <= 0 ? (
        <div className=" flex items-center justify-center h-[100vh] bg-[#FFFFF0]">
          <h1 className=" text-center text-4xl opacity-40">
            YOUR CART IS EMPTY!
          </h1>
        </div>
      ) : (
        <div className=" px-4   grid grid-cols-3 items-center max-[816px]:block">
          <table className=" w-[90%] col-span-2 max-[816px]:w-full max-[600px]:hidden">
            <thead>
              <tr className=" border-b">
                <td></td>
                <td>PRODUCT</td>
                <td className=" py-3">PRICE</td>
                <td>QUANTITY</td>
                <td> </td>
              </tr>
            </thead>
            <tbody>
              {cart.map((prod) => (
                <>
                  <tr className=" border-b my-2">
                    <td className=" py-1">
                      <img
                        src={`/Images/${prod.img}`}
                        alt=""
                        className=" w-[80px] aspect-square"
                      />
                    </td>

                    <td className=" uppercase">{prod.name}</td>

                    <td className="">₦{prod.selectedPrice}</td>

                    <td>
                      <select
                        name=""
                        id=""
                        className=" p-0 bg-transparent"
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_QUANTITY",
                            payload: {
                              id: prod.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </select>
                    </td>

                    <td>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "#000000" }}
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          });
                        }}
                      />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          <table className=" w-full min-[600px]:hidden">
            <tbody>
              {cart.map((prod) => (
                <>
                  <tr className=" border-b ">
                    <td className=" py-1 w-[100px]">
                      <img
                        src={`/Images/${prod.img}`}
                        alt=""
                        className=" w-[80px] aspect-square"
                      />
                    </td>

                    <td className=" uppercase flex justify-between py-2 border-b items-center">
                      <p>{prod.name}</p>
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ color: "#000000" }}
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          });
                        }}
                      />
                    </td>

                    <td className=" flex justify-between py-2 border-b">
                      <p>PRICE</p>
                      <p>₦{prod.selectedPrice}</p>
                    </td>

                    <td className="flex justify-between py-2">
                      <p>Quantity</p>
                      <select
                        name=""
                        id=""
                        className=" p-0 bg-transparent"
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_QUANTITY",
                            payload: {
                              id: prod.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                      </select>
                    </td>

                    <td></td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          <div className=" border p-4 mt-10">
            <h1 className=" text-lg py-4">CART TOTAL</h1>
            <table className=" w-full">
              <tr className="  border-b p-2">
                <td className=" p-2 text-lg">Subtotal</td>
                <td className=" text-lg">₦{total}</td>
              </tr>
              <tr className="  border-b p-2  text-lg">
                <td className=" p-4">Shipping</td>
                <td>FREE</td>
              </tr>
              <tr className="  border-b p-2  text-lg">
                <td className=" p-4">TOTAL</td>
                <td>₦{total}</td>
              </tr>
            </table>
            <button className=" w-full p-2 text-white bg-[#2B2D42] mt-4">
              PROCEED TO CHECKOUT
            </button>
          </div>

          {/* <div className=" flex justify-between">
            <h1>SUBTOTAL</h1>
            <p>₦{total}</p>
          </div> */}
        </div>
      )}
      <FooterWithSocialMediaIcons />
    </>
  );
};

export default Cart;
