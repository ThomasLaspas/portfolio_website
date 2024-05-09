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
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  const [active, setActive] = useState("");
  const [language, setlanguage] = useState(false);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar
            active={active}
            setActive={setActive}
            language={language}
            setlanguage={setlanguage}
          />
          <Hero active={active} setActive={setActive} language={language} />
        </div>
        <About language={language} />
        <Tech language={language} />
        <Experience language={language} />
        <Works language={language} />

        <div className="relative z-0">
          <Contact language={language} />
        </div>
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
