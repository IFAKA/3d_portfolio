import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Stars,
  Tech,
  Projects,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <Stars />
      </div>
    </BrowserRouter>
  );
};

export default App;
