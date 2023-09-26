import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Full from "./Full";
import Cart from "./Pages/Cart";
import CategoryProductPage from "./Pages/CategoryProductPage";
import ProductPage from "./Pages/ProductPage";
import Paystack from "./Pages/Paystack";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Full />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories/:gender" element={<CategoryProductPage />} />
            <Route path="/productpage/:tag/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<Paystack />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
