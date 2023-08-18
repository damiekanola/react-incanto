import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Full from "./Full";
import CategoryProductPage from "./Pages/CategoryProductPage";
import ProductPage from "./Pages/ProductPage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Full />} />
            <Route path="/categories/:gender" element={<CategoryProductPage />} />
            <Route path="/productpage/:tag/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
