import "./App.css";
import Content from "./components/Content";
import CoffeeGroup from "./components/CoffeeGroup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/coffee" element={<CoffeeGroup />} />
      </Routes>
    </div>
  );
}

export default App;
