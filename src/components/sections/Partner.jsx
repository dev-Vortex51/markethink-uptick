import React from "react";
import { images } from "../../constants/data";

const Partner = () => {
  return (
    <section className="bg-[#F6FBF9] py-8 md:py-15">
      <div className="w-[80%]  mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 flex-wrap">
        {images.map((img) => (
          <img key={img.src} src={img.src} alt={img.alt} className="" />
        ))}
      </div>
    </section>
  );
};

export default Partner;
