import React from "react";

const Tabs = ({ activeTab, handleTabClick }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
      <p
        className={` cursor-pointer relative flex flex-col items-center leading-[40px] text-base sm:text-lg xl:text-[30px] ${
          activeTab === "writing" ? "text-blacky" : "text-accent"
        } `}
        onClick={() => handleTabClick("writing")}
      >
        Content Writing
        {activeTab === "writing" && (
          <div className="absolute w-[70%] h-[3px] bg-lemony mt-4 bottom-[-7px] rounded-full"></div>
        )}
      </p>
      <p
        className={`cursor-pointer relative flex flex-col items-center leading-[40px] text-md sm:text-lg xl:text-[30px] ${
          activeTab === "marketing" ? "text-blacky" : "text-accent"
        }`}
        onClick={() => handleTabClick("marketing")}
      >
        Content Marketing
        {activeTab === "marketing" && (
          <div className="absolute w-[70%] h-[3px] bg-lemony mt-4 bottom-[-7px] rounded-full"></div>
        )}
      </p>
    </div>
  );
};

export default Tabs;
