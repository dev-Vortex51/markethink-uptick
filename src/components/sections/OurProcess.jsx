import React from 'react';

export default function OurProcess() {
  return (
    <section className="bg-[#F6FBF9] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blacky leading-tight text-center lg:text-lef mb-2">How Can We Help You?</h2>
        <p className="text-base sm:text-lg md:text-xl text-accent leading-relaxed  mb-12">Let's do great work together</p>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative w-full md:w-[25%] mb-10 md:mb-0">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center z-10 ">
              <img src="/Kite-Green.png" alt="Kite icon" className="w-6 h-6" />
            </div>
            <div className="mt-3 font-semibold text-gray-900 leading-[40px] text-base sm:sm:text-lg xl:text-[22px]  text-blacky">
              <p>Update content</p>
              <p>on my Website</p>
            </div>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:block absolute top-7 left-[calc(12.5%+56px)] w-[calc(25%-112px)] border-t border-dashed border-[#A2BDAA] z-0" />

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative w-full md:w-[25%] mb-10 md:mb-0">
            <div className="w-14 h-14 rounded-full flex items-center justify-center z-10">
              <div className="w-[40px] h-[40px] bg-white rounded-full border border-[#A2BDAA]"></div>
            </div>
            <div className="mt-3 text-accent leading-[40px] text-base sm:sm:text-lg xl:text-[22px] ">
              <p>Improve User</p>
              <p>Experience</p>
            </div>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block absolute top-7 left-[calc(37.5%+56px)] w-[calc(25%-112px)] border-t border-dashed border-[#A2BDAA] z-0" />

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative w-full md:w-[25%] mb-10 md:mb-0">
            <div className="w-14 h-14 rounded-full flex items-center justify-center z-10">
              <div className="w-[40px] h-[40px] bg-white rounded-full border border-[#A2BDAA]"></div>
            </div>
            <div className="mt-3 text-accent leading-[40px] text-base sm:sm:text-lg xl:text-[22px] ">
              <p>Request Free</p>
              <p>Website Review</p>
            </div>
          </div>

          {/* Divider 3 */}
          <div className="hidden md:block absolute top-7 left-[calc(62.5%+56px)] w-[calc(25%-112px)] border-t border-dashed border-[#A2BDAA] z-0" />

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center relative w-full md:w-[25%]">
            <div className="w-14 h-14 rounded-full flex items-center justify-center z-10">
              <div className="w-[40px] h-[40px] bg-white rounded-full border border-[#A2BDAA]"></div>
            </div>
            <div className="mt-3 text-accent leading-[40px] text-base sm:sm:text-lg xl:text-[22px] ">
              <p>Improve your</p>
              <p>SEO Rankings</p>
            </div>
          </div>
        </div>

        {/* See More Link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center underline gap-3 text-lemony  font-medium"
          >
            See More
            <img src="/Arrow.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
