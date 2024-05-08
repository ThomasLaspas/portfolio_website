import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  const [active, setActive] = useState("");
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar active={active} setActive={setActive} />
          <Hero active={active} setActive={setActive} />
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />

        <div className="relative z-0">
          <Contact />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
