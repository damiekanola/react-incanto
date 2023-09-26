import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/Hamburger";
import Hero from "./Components/Hero";
import { CartState } from "./Context/Context";

import FooterWithSocialMediaIcons from "./Components/Footer";
import NewRealeases from "./Components/NewReleases";
import Giftsets from "./Components/Giftsets";
import BestsellersList from "./Components/Bestsellers";

export default function Full() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <BestsellersList />
      <NewRealeases />
      <Giftsets />
      <FooterWithSocialMediaIcons />
    </>
  );
}
