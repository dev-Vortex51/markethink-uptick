import React from "react";
import {
  Article,
  Button,
  Footer,
  Hero,
  OurProcess,
  Partner,
  Services,
} from "./components";

const App = () => {
  return (
    <main className="grid grid-rows-[1fr_auto_1fr_1fr_1fr_1fr]">
      <Hero />
      <Partner />
      <Services />
      <OurProcess />
      <Article />
      <Footer />
    </main>
  );
};

export default App;
