import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
// import Navbar from './Components/Navbar.jsx'
// import ProductPage from './Pages/ProductPage.jsx'
// import CategoryProductPage from './Pages/CategoryProductPage.jsx'
import "./index.css";
import Context from "./Context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <App />  
    </Context>
  </React.StrictMode>
);
