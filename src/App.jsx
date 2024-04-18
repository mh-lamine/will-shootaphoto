import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <div className="text-text">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
