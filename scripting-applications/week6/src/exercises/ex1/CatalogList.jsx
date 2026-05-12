import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFetchJSON } from "../../hooks/useFetchJSON";
import "./styles.css";

export default function CatalogList() {
  const { data, loading, error } = useFetchJSON("/items.json");
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const q = params.get("q") ?? "";
  const [query, setQuery] = useState(q);

  useEffect(() => {
    setQuery(q);
  }, [q]);

  const headingRef = useRef(null);
  useEffect(() => {
    headingRef.current?.focus();
  }, [location.pathname]);

  const filtered = useMemo(() => {
    const list = data ?? [];
    const term = query.trim().toLowerCase();
    if (!term) return list;
    return list.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
    );
  }, [data, query]);

  const updateQuery = (value) => {
    setQuery(value);
    const search = value ? `?q=${encodeURIComponent(value)}` : "";
    navigate({ pathname: "/ex1", search }, { replace: true });
  };

  return (
    <main className="ex1">
      <h1 tabIndex={-1} ref={headingRef} className="ex1__title">
        Catalog Browser
      </h1>

      <div className="ex1__search">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="search"
          value={query}
          placeholder="Filter by name or category"
          onChange={(e) => updateQuery(e.target.value)}
        />
      </div>

      {loading && <p className="status">Loading…</p>}
      {error && <p className="status error">Error: {error.message}</p>}
      {!loading && !error && filtered.length === 0 && (
        <p className="status">No results</p>
      )}

      {!loading && !error && filtered.length > 0 && (
        <ul className="ex1__list">
          {filtered.map((item) => (
            <li key={item.id} className="ex1__card">
              <Link
                to={`/ex1/item/${item.id}${location.search}`}
                className="ex1__link"
              >
                <strong>{item.name}</strong>
                <span>{item.category}</span>
                <span>${item.price.toFixed(2)}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}