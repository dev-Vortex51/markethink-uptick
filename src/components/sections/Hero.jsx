import React, { useState } from "react";
import Header from "../Header";
import Button from "../ui/Button";
import Sidebar from "../ui/Sidebar";

const Hero = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };
  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  return (
    <section className="relative bg-[url(/bg.png)] bg-cover bg-center text-white min-h-screen">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#395C4D]/80 to-[#132D1F]/80 z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-[90%] lg:w-[80%] mx-auto py-10 md:py-20 flex flex-col">
        {/* Header */}
        <Header onOpen={handleOpenSidebar} />
        {openSidebar && (
          <Sidebar onClose={handleSidebarClose} isOpen={openSidebar} />
        )}

        {/* Main Text */}
        <div className="text-center mt-16 md:mt-24">
          <div className="flex items-center justify-center gap-4 lg:gap-7">
            <span className="w-[40px] md:w-[60px] h-0.5 bg-white opacity-40" />
            <h2 className="font-medium text-[24px] sm:text-[30px] md:text-[36px]">
              The Best
            </h2>
            <span className="w-[40px] md:w-[60px] h-0.5 bg-white opacity-40" />
          </div>

          <h1 className="font-bold text-[36px] sm:text-[48px] md:text-[60px] mt-4">
            Digital Marketing
          </h1>

          <p className="max-w-[700px] mx-auto mt-6 text-[16px] sm:text-[18px] md:text-[20px] leading-[30px] sm:leading-[36px] font-light">
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer
          </p>

          <div className="z-50">
            <Button className="mt-8 ">Get Started</Button>
          </div>
        </div>
      </div>

      <div className="w-full absolute bottom-0  hidden md:block">
        <img src="/down.png" alt="" className="w-full" />
      </div>
      <img
        src="/Lefty.png"
        alt=""
        className="absolute bottom-0 block md:hidden right-0 size-[100px]"
      />
      <img
        src="/Righty.png"
        alt=""
        className="absolute bottom-0 block md:hidden  left-0 size-[100px]"
      />
    </section>
  );
};

export default Hero;
