import React from "react";

const Content = ({ image, title, content }) => {
  return (
    <div className="flex flex-col gap-4 items-center lg:items-start">
      <img src={image} alt="" className="size-[50px]" />
      <h2 className="font-[500] text-[24px] text-blacky leading-[100%] tracking-[0%] text-center lg:text-left">
        {title}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-accent leading-relaxed text-center lg:text-left">
        {content}
      </p>
    </div>
  );
};

export default Content;
