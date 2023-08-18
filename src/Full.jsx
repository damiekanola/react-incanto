import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hamburger from "./Components/Hamburger";
import Hero from "./Components/Hero";

import FooterWithSocialMediaIcons from "./Components/Footer";
import NewRealeases from "./Components/NewReleases";
import Giftsets from "./Components/Giftsets";
import BestsellersList from "./Components/Bestsellers";

export default function Full() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <>
      <Navbar
        handleToggle={handleToggle}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Hamburger isOpen={isOpen} />
      <div className={`relative ${isOpen ? "overflow-hidden" : ""}`}>
        {/* <Hero /> */}
        {isOpen ? <Hamburger isOpen={isOpen} /> : <Hero />}
        <BestsellersList />
        <NewRealeases />
        <Giftsets />
        <FooterWithSocialMediaIcons />
      </div>
    </>
  );
}
