import { Home, Missing, Art, English, Math, Psy, Sections } from "pages";
import { Menu } from "components";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/art", element: <Art /> },
  { path: "/english", element: <English /> },
  { path: "/math", element: <Math /> },
  { path: "/psy", element: <Psy /> },
  { path: "/sections", element: <Sections /> },
  { path: "*", element: <Missing /> },
];

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
