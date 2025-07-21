import React from "react";
import ContactCard from "./ContactCard";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className="w-full bg-white flex flex-col py-12">
      <div className="w-[90%] max-w-[1280px] mx-auto flex flex-col gap-8">
        <div className="">
          {/* Contact CTA Card */}
          <ContactCard />
          {/* Links and About */}
          <FooterLinks />
        </div>
        <div className="">
          <p className=" font-[400] text-[16px] leading-[34px] text-accent text-center mt-6 ">
            &copy; Copyright Markethink. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
