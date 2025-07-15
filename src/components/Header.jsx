import React from "react";
import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <img src="/Logo.png" alt="" />
      </div>
      <nav className="flex items-center gap-6">
        <a className="text-white text-[16px] font-[400]" href="#features">
          Features
        </a>
        <a className="text-white text-[16px] font-[400]" href="#pricing">
          Pricing
        </a>
        <a className="text-white text-[16px] font-[400]" href="#about">
          About
        </a>
        <a className="text-white text-[16px] font-[400]" href="#contact-us">
          Contact Us
        </a>
      </nav>
      <Button variation="outline">Free Trial</Button>
    </header>
  );
};

export default Header;
