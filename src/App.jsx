import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Gallery from "./pages/Gallery";
import Test from "./pages/Test";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div className="text-text">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default App;
