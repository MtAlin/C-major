import { useEffect, useState } from "react";
import Slider from "./Utils/slider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Artisti from "./Components/NavComponents/Artisti";
import Program from "./Components/NavComponents/Program";
import Ateliere from "./Components/NavComponents/Ateliere";
import CompetitiSportive from "./Components/NavComponents/CompetitiSportive";
import Contact from "./Components/NavComponents/Contact";
import title from "./Utils/title";

function App() {
  const [increase, setIncrease] = useState(0);

  const SliderIncrease = () => {
    setIncrease(increase >= Slider.length - 1 ? 0 : increase + 1);
  };
  const SliderDecrease = () => {
    setIncrease(increase <= 0 ? Slider.length - 1 : increase - 1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      SliderIncrease();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [increase]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                sliders={Slider}
                increase={increase}
                SliderIncrease={SliderIncrease}
                SliderDecrease={SliderDecrease}
              />
            }
          />
          <Route path="/Artisti" element={<Artisti title={title} />} />
          <Route path="/Program" element={<Program title={title} />} />
          <Route path="/Ateliere" element={<Ateliere title={title} />} />
          <Route
            path="/CompetitiSportive"
            element={<CompetitiSportive title={title} />}
          />
          <Route path="/Contact" element={<Contact title={title} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
