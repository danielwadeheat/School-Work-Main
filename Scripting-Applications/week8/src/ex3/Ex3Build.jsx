import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

export default function Ex3Build() {
  const headingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    headingRef.current?.focus();
  }, [location.pathname]);

  return (
    <main className="page ex3">
      <h1 tabIndex={-1} ref={headingRef}>
        Exercise 3: Build & Preview
      </h1>

      <ol>
        <li>Run <code>npm run build</code></li>
        <li>Run <code>npm run preview</code></li>
        <li>Open the preview URL and check routes + forms</li>
      </ol>

      <p className="muted">
        This route is lazy-loaded with <code>React.lazy</code>.
      </p>
    </main>
  );
}