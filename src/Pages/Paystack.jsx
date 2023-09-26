import { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { CartState } from "../Context/Context";
import { Footer } from "flowbite-react";
import FooterWithSocialMediaIcons from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function Paystack() {
  const publicKey = "pk_test_754fba932e66b5f7e7ce848d81f2efae4848548e";
   // Remember, set in kobo!
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [total, setTotal] = useState(0);
  const amount = total * 100;

  const componentProps = {
    email,
    amount,
    address,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  
  const {
    state: { cart },
  } = CartState();

  console.log(cart);
  

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.selectedPrice) * curr.qty, 0)
    );
  }, [cart]);



  return (
    <>
    <Navbar />
      <div className="checkout-form px-5 grid grid-cols-2 gap-10 items-center pt-5 max-[800px]:grid-cols-1 ">
        <div>
        <h1 className=" text-lg">BILLING DETAILS</h1>
        <form>

        <div className="checkout-field flex flex-col py-2">
        
          <label>Email <span className=" text-red-600 text-lg">*</span></label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="checkout-field flex flex-col py-2">
          <label>Name  <span className=" text-red-600 text-lg">*</span></label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="checkout-field flex flex-col py-2">
          <label>Phone  <span className=" text-red-600 text-lg">*</span></label>
          <input
            type="text"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="checkout-field flex flex-col py-2">
          <label>Address  <span className=" text-red-600 text-lg">*</span></label>
          <input
            type="text"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        </form>
    
        </div>

        <div>
        <table className=" w-full col-span-2 max-[816px]:w-full ">
            <thead>
              <tr className=" border-b">
                <td></td>
                <td>PRODUCT</td>
                <td className=" py-3">PRICE</td>
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
                  </tr>
                </>
              ))}
              <tr>
                <td  className=" py-4">SUBTOTAL</td>
                <td></td>
                <td>₦{total}</td>
              </tr>
            </tbody>
          </table>
          <PaystackButton
          className="paystack-button bg-[#2B2D42] text-white p-2 uppercase w-full mt-5"
          {...componentProps}
        />
        </div>
      </div>
      <FooterWithSocialMediaIcons />
    </>
  );
}
