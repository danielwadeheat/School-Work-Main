import { useEffect, useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export default function Ex1List({ items }) {
  const headingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    headingRef.current?.focus();
  }, [location.pathname]);

  const params = new URLSearchParams(location.search);
  const saved = params.get("saved") === "1";

  const list = useMemo(() => items ?? [], [items]);

  return (
    <main className="page ex1">
      <h1 tabIndex={-1} ref={headingRef}>
        Exercise 1: Add/Edit Form
      </h1>

      {saved && <p className="status success">Saved successfully.</p>}

      <div className="ex1__actions">
        <Link to="/ex1/new" className="btn">
          + Add Item
        </Link>
      </div>

      {list.length === 0 && <p className="status">No items yet.</p>}

      {list.length > 0 && (
        <ul className="ex1__list">
          {list.map((item) => (
            <li key={item.id} className="ex1__row">
              <div>
                <strong>{item.name}</strong>
                <div className="muted">
                  {item.category} • ${item.price.toFixed(2)}
                </div>
              </div>
              <Link to={`/ex1/edit/${item.id}`} className="link">
                Edit
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}