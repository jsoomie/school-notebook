import { Home, Missing } from "pages";
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
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
