import React from "react";
import Button from "./ui/Button";

const ContactCard = () => {
  return (
    <div className="relative bg-[url(/bg.png)] bg-cover bg-center w-full flex items-center py-20 sm:py-24 lg:py-28">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#395C4D]/80 to-[#132D1F]/80 z-0" />

      <div className="z-10 flex flex-col w-[90%] mx-auto gap-6">
        {/* Main Heading */}
        <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug max-w-[659px] text-center sm:text-left">
          Subscribe to get information, latest news and other interesting offers
          about
        </h1>

        {/* Brand Section */}
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <img
            className="size-[40px] sm:size-[60px]"
            src="/Category.png"
            alt=""
          />
          <h1 className="text-white font-semibold text-2xl sm:text-3xl">
            markethink
          </h1>
        </div>

        {/* Input & Button */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            className="px-6 py-3 w-full md:w-auto rounded-full bg-white h-[60px] md:h-[78px] font-medium text-base sm:text-lg outline-0 border-0 text-black placeholder:text-black"
            placeholder="Your email"
          />
          <Button className="w-full ">Subscribe</Button>
        </div>
      </div>

      {/* Decorative Images */}
      <img
        src="/FooterLeft.png"
        alt=""
        className="hidden xl:block absolute left-0 top-0 z-50"
      />
      <img
        src="/FooterRight.png"
        alt=""
        className="hidden xl:block absolute right-[-6.63rem] bottom-[-1.7rem] z-50"
      />
    </div>
  );
};

export default ContactCard;
