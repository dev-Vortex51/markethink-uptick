import React from "react";
import Button from "./ui/Button";
import { Eye } from "lucide-react";

const WritingContent = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* first child */}
      <div className="flex flex-col gap-4 items-start">
        <img src="/SEO.png" alt="" className="w-full" />
        <p className="object-contain font-[400] text-[18px] leading-[100%] text-accent sm:text-[16px] md:text-[18px] lg:text-[20px]">
          AUGUST 17, 2021
        </p>
        <h1 className="font-[500] text-[26px] leading-[36px] text-black sm:text-[22px] md:text-[26px] lg:text-[28px]">
          10 Reasons to invest in SEO copywriting services
        </h1>
        <Button
          variation="outline"
          bgColor="bg-transparent"
          textColor="text-lemony"
        >
          Read More
        </Button>
      </div>

      {/* second child */}

      <div className="grid md:grid-cols-2 gap-6 ">
        <div className="flex flex-col gap-4 items-start">
          <img src="/Digital.png" alt="" className="w-full object-contain" />
          <p className="font-[400]  text-[18px] leading-[100%] text-accent sm:text-[16px] md:text-[18px] lg:text-[20px]">
            AUGUST 17, 2021
          </p>
          <h1 className="font-[500] text-[26px] leading-[36px] text-black sm:text-[22px] md:text-[24px] ">
            How to get hired at a top Digital Marketing
          </h1>
          <p className=" font-[400] text-[18px] leading-[30px] text-accent ">
            Agency life. We’ve all seen the photos posted on social media – the
            cool...
          </p>
          <button className="size-[68px] rounded-full border-2 border-lemony flex items-center justify-center font-semibold text-lemony cursor-pointer">
            <Eye />
          </button>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <img src="/Copy.png" alt="" className="w-full" />
          <p className="font-[400] text-[18px] leading-[100%] object-contain text-accent sm:text-[16px] md:text-[18px] lg:text-[20px]">
            AUGUST 17, 2021
          </p>
          <h1 className="font-[500] text-[26px] leading-[36px] text-black sm:text-[22px] md:text-[24px] ">
            Copywriting guidelines during the coronavirus{" "}
          </h1>
          <p className=" font-[400] text-[18px] leading-[30px] text-accent ">
            Since the coronavirus hit earlier this year, it’s hard to go
            anywhere...
          </p>
          <button className="size-[68px] rounded-full border-2 border-lemony flex items-center justify-center font-semibold text-lemony cursor-pointer">
            <Eye />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritingContent;
