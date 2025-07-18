import React from "react";
import Button from "./../ui/Button";
import Content from "./../ui/Content";
import { contents } from "../../constants/data";

const Services = () => {
  return (
    <section className="py-20 flex items-center justify-center">
      <div className="mx-auto w-[90%]  grid lg:grid-cols-2 gap-10 items-start  lg:space-y-10">
        {/* Left Content Block */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blacky leading-tight text-center lg:text-left">
            We’re Strategic Digital Marketing Agency
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-accent leading-relaxed max-w-full lg:max-w-[424px] text-center lg:text-left mt-4">
            We’ve created a full-stack structure for our working workflow
            processes, where from the funny century initial all made, have spare
            to negatives
          </p>
         <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center underline gap-3 text-lemony mt-4 font-medium"
          >
            See More
            <img src="/Arrow.png" alt="" />
          </a>
        </div>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-1 xl:grid-cols-2 space-y-8 space-x-4 ">
          {contents.map((content) => (
            <Content
              image={content.image}
              content={content.content}
              key={content.id}
              title={content.title}
            />
          ))}
        </div>

        {/* Thumbnail Image */}
        <div className="flex items-center justify-center">
          <img src="/Thumbnail.png" alt="thumbnail" />
        </div>

        {/* Right Content Block */}
        <div className="flex flex-col gap-4 items-center xl:mt-10 lg:items-start">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blacky leading-tight text-center lg:text-left">
            Increase Business on Social Media Reach
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-accent leading-relaxed text-center lg:text-left">
            Using our network of industry influencers, we help promote your
            content
          </p>
          <Button className="mt-2">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
