import { Home, Missing } from "pages";
import { Navbar } from "components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
