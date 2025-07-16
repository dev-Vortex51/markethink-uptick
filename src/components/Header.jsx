import React from "react";
import Button from "./ui/Button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img className="size-10" src="/Category.png" alt="" />
        <h1 className="text-white font-[600] text-[26px] hidden md:block ">
          markethink
        </h1>
      </div>
      <nav className="hidden items-center gap-6 lg:flex">
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
      <div className="hidden lg:block">
        <Button variation="outline" bgColor="bg-[#FFFFFF1A]">
          Free Trial
        </Button>
      </div>
      <div className="block lg:hidden">
        <MenuIcon className="size-6 text-white cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
