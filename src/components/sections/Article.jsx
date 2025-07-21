import React, { useState } from "react";
import Tabs from "../Tabs";
import TabContents from "../TabContents";

function Article() {
  const [activeTab, setActiveTab] = useState("writing");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className=" py-16 px-4">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-4 mb-8">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:max-w-[488px] text-blacky leading-tight text-center lg:text-left mb-2">
            Read More Articles From Our Blog
          </h2>
          {/* tabs */}
          <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
        </div>
        <TabContents activeTab={activeTab} />
      </div>
    </section>
  );
}

export default Article;
