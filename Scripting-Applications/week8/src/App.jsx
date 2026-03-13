import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Ex1List from "./ex1/Ex1List.jsx";
import Ex1Form from "./ex1/Ex1Form.jsx";
import Ex2Speed from "./ex2/Ex2Speed.jsx";

const Ex3Build = lazy(() => import("./ex3/Ex3Build.jsx"));

const initialItems = [
  { id: 1, name: "Canvas Tote", price: 19.99, category: "Accessories" },
  { id: 2, name: "Ceramic Mug", price: 12.5, category: "Home" },
  { id: 3, name: "Trail Bottle", price: 16.0, category: "Outdoors" }
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <HashRouter>
      <nav className="topnav">
        <NavLink to="/ex1">Ex1</NavLink>
        <NavLink to="/ex2">Ex2</NavLink>
        <NavLink to="/ex3">Ex3</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Ex1List items={items} />} />
        <Route path="/ex1" element={<Ex1List items={items} />} />
        <Route path="/ex1/new" element={<Ex1Form items={items} setItems={setItems} />} />
        <Route
          path="/ex1/edit/:id"
          element={<Ex1Form items={items} setItems={setItems} />}
        />
        <Route path="/ex2" element={<Ex2Speed />} />
        <Route
          path="/ex3"
          element={
            <Suspense fallback={<main className="page">Loading…</main>}>
              <Ex3Build />
            </Suspense>
          }
        />
        <Route path="*" element={<main className="page">Not found</main>} />
      </Routes>
    </HashRouter>
  );
}