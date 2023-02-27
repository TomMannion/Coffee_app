import "./App.css";
import Content from "./components/Content";
import CoffeeForm from "./components/CoffeeForm";
import TestForm from "./components/TestForm";
import CoffeeGroup from "./components/CoffeeGroup";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CoffeeGroup />} />
        <Route path="/post" element={<TestForm />} />
      </Routes>
    </div>
  );
}

export default App;
