import { Home, Missing, Art, English, Math, Psy, Sections } from "pages";
import { Menu } from "components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/english" element={<English />} />
        <Route path="/math" element={<Math />} />
        <Route path="/psy" element={<Psy />} />
        <Route path="/sections" element={<Sections />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
