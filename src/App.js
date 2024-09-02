import "./styles.css";
import Navbar from "./Components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Gallery from "./routes/Gallery";
import Service from "./routes/Service";
import Login from "./Components/Login";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Navbar />
    </div>
  );
}
