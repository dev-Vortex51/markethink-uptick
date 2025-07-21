import React from "react";
import { footerLinks } from "../constants/data";

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mt-12 py-10 border-b border-gray-200 ">
      {/* Branding & Description */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
        <div className="flex items-center gap-2">
          <img
            className="w-[30px] h-[30px]"
            src="/CategoryBlack.png"
            alt="Logo"
          />
          <h1 className="text-blacky font-semibold text-2xl">markethink</h1>
        </div>
        <p className="text-accent text-base sm:text-lg leading-relaxed max-w-sm">
          Marketing is a company that focuses on developing company strategies
          to increase digital marketing.
        </p>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col gap-10 items-start text-left md:flex-row md:justify-between md:items-start md:w-full ">
        {footerLinks.map((link, index) => (
          <div key={index} className="flex flex-col gap-4 min-w-[160px]">
            <h2 className="font-bold text-lg sm:text-xl text-blacky">
              {link.title}
            </h2>
            <ul className="flex flex-col gap-2">
              {link.links.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-accent text-sm sm:text-base hover:text-blacky transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
