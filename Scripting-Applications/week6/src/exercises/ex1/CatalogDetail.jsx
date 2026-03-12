import { useEffect, useMemo, useRef } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useFetchJSON } from "../../hooks/useFetchJSON";
import "./styles.css";

export default function CatalogDetail() {
  const { data, loading, error } = useFetchJSON("/items.json");
  const location = useLocation();
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, [location.pathname]);

  const { id } = useParams();

  const item = useMemo(() => {
    const list = data ?? [];
    return list.find((i) => String(i.id) === String(id));
  }, [data, id]);

  return (
    <main className="ex1">
      <h1 tabIndex={-1} ref={headingRef} className="ex1__title">
        Item Detail
      </h1>

      <Link to={`/ex1${location.search}`} className="ex1__back">
        ← Back to List
      </Link>

      {loading && <p className="status">Loading…</p>}
      {error && <p className="status error">Error: {error.message}</p>}
      {!loading && !error && !item && (
        <p className="status">No results</p>
      )}

      {!loading && !error && item && (
        <section className="ex1__detail">
          <h2>{item.name}</h2>
          <p>
            <strong>Category:</strong> {item.category}
          </p>
          <p>
            <strong>Price:</strong> ${item.price.toFixed(2)}
          </p>
          <p className="muted">ID: {item.id}</p>
        </section>
      )}
    </main>
  );
}