import "./App.css";
import Content from "./components/Content";
import CoffeeForm from "./components/CoffeeForm";
import CoffeeGroup from "./components/CoffeeGroup";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CoffeeGroup />} />
        <Route path="/post" element={<CoffeeForm />} />
      </Routes>
    </div>
  );
}

export default App;
