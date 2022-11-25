import "./App.css";
import Content from "./components/Content";
import CoffeeGroup from "./components/CoffeeGroup";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CoffeeGroup />} />
        <Route path="/post" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
