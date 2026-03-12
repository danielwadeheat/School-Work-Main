import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useFetchJSON } from "../../hooks/useFetchJSON";
import "./styles.css";

export default function UseFetchJSONDemo() {
  const { data, loading, error } = useFetchJSON("/items.json");
  const items = data ?? [];

  const location = useLocation();
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [location.pathname]);

  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <main className="ex2">
      <h1 tabIndex={-1} ref={headingRef} className="ex2__title">
        useFetchJSON Hook (Exercise 2)
      </h1>

      {loading && <p className="status">Loading…</p>}
      {error && <p className="status error">Error: {error.message}</p>}

      {!loading && !error && (
        <section className="ex2__panel">
          <p>
            Items loaded: <strong>{items.length}</strong>
          </p>
          <p>
            Categories: <strong>{categories.join(", ")}</strong>
          </p>
          <p className="muted">
            This hook is also used in Exercise 1 (List + Detail).
          </p>
        </section>
      )}
    </main>
  );
}