import { Home, Missing, Art, English, Math, Psy } from "pages";
import { Navbar, Sidebar } from "components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/english" element={<English />} />
        <Route path="/math" element={<Math />} />
        <Route path="/psy" element={<Psy />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
