import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

const images = [
  { id: 1, alt: "Mountain", src: "https://picsum.photos/id/1018/640/400" },
  { id: 2, alt: "Forest", src: "https://picsum.photos/id/1011/640/400" },
  { id: 3, alt: "Ocean", src: "https://picsum.photos/id/1016/640/400" }
];

export default function Ex2Speed() {
  const headingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    headingRef.current?.focus();
  }, [location.pathname]);

  return (
    <main className="page ex2">
      <h1 tabIndex={-1} ref={headingRef}>
        Exercise 2: Speed Touches
      </h1>

      <p className="muted">
        Images below use <code>loading="lazy"</code> and explicit dimensions.
      </p>

      <div className="ex2__grid">
        {images.map((img) => (
          <figure key={img.id}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width="640"
              height="400"
            />
            <figcaption>{img.alt}</figcaption>
          </figure>
        ))}
      </div>

      <p className="muted">
        The Exercise 3 route is code-split using <code>React.lazy</code> +
        <code>Suspense</code> in <code>App.jsx</code>.
      </p>
    </main>
  );
}