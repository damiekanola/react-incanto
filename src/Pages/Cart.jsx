import Navbar from "../Components/Navbar";
import { CartState } from "../Context/Context";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterWithSocialMediaIcons from "../Components/Footer";
import { useEffect, useState } from "react";

const Cart = () => {
  const [qty, setQty] = useState(1);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);

  function increment(prev) {
    setQty(prev + 1);
  }

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.selectedPrice)*curr.qty, 0));
  }, [cart]);

  return (
    <>
      <Navbar />
      {cart.length <= 0 ? (
        <div className=" flex items-center justify-center h-[400px] bg-[#FFFFF0]">
          <h1 className=" text-center text-4xl opacity-40">
            YOUR CART IS EMPTY!
          </h1> 
        </div>
      ) : (
        <div className=" px-3 bg-slate-50 h-[100vh]">
          <ul>
            {cart.map((prod) => (
              <>
                {/* <li className=" flex items-center justify-between">
                <div className=" w-[80px] aspect-square">
                  <img src={`/Images/${prod.img}`} alt="" />
                </div>
                <p>{prod.name}</p>
                <div>
                  <button onClick={qty => setQty(qty - 1)}>-</button>
                  <p>{qty}</p>
                  <button onClick={prev => setQty(prev + 1)}>+</button>
                </div>
                <p>₦{prod.price}</p>
                <FontAwesomeIcon icon={faTrash} style={{ color: "#000000" }}  onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: prod,
            });
          }}  />
              </li> */}
                <li className=" flex border-b justify-between mb-3 items-center">
                  <div className=" w-[80px] aspect-square">
                    <img src={`/Images/${prod.img}`} alt="" />
                  </div>

                  <div className=" flex flex-col">
                    <p className=" uppercase">{prod.name}</p>
                    <div className=" flex">
                      <div className=" border px-2">
                        <button className=" px-1">-</button>
                        <span className=" px-1">1</span>
                        <button className=" px-1">+</button>
                      </div>

                      <p className=" ml-2">₦{prod.selectedPrice}</p>
                    </div>
                  </div>

                  <div>
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
                  </div>
                </li>
              </>
            ))}
          </ul>
          <div className=" flex justify-between">
            <h1>SUBTOTAL</h1>
            <p>₦{total}</p>
          </div>
        </div>
      )}
      <FooterWithSocialMediaIcons />
    </>
  );
};

export default Cart;
