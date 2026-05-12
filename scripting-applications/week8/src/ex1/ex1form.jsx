import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./styles.css";

const categories = ["Home", "Outdoors", "Accessories", "Electronics"];

export default function Ex1Form({ items, setItems }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const formRef = useRef(null);

  const isEdit = Boolean(id);
  const item = useMemo(
    () => items.find((i) => String(i.id) === String(id)),
    [items, id]
  );

  const [name, setName] = useState(item?.name ?? "");
  const [price, setPrice] = useState(item?.price ?? "");
  const [category, setCategory] = useState(item?.category ?? "");
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setPrice(item.price);
      setCategory(item.category);
    }
  }, [item]);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form.checkValidity()) {
      const newErrors = {
        name: form.name.validationMessage,
        price: form.price.validationMessage,
        category: form.category.validationMessage
      };
      setErrors(newErrors);
      form.reportValidity();
      return;
    }

    setErrors({});
    setSaving(true);

    setTimeout(() => {
      if (isEdit) {
        setItems((prev) =>
          prev.map((i) =>
            String(i.id) === String(id)
              ? { ...i, name, price: Number(price), category }
              : i
          )
        );
      } else {
        const nextId = Math.max(0, ...items.map((i) => i.id)) + 1;
        setItems((prev) => [
          ...prev,
          { id: nextId, name, price: Number(price), category }
        ]);
      }
      setSaving(false);
      navigate("/ex1?saved=1");
    }, 1200);
  };

  if (isEdit && !item) {
    return (
      <main className="page ex1">
        <h1>Item not found</h1>
        <Link to="/ex1">Back to list</Link>
      </main>
    );
  }

  return (
    <main className="page ex1">
      <h1 tabIndex={-1} ref={headingRef}>
        {isEdit ? "Edit Item" : "Add Item"}
      </h1>

      <form ref={formRef} className="ex1__form" onSubmit={onSubmit} noValidate>
        <label>
          Name
          <input
            name="name"
            value={name}
            minLength={2}
            required
            aria-invalid={Boolean(errors.name)}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        {errors.name && (
          <p className="error" role="alert">
            {errors.name}
          </p>
        )}

        <label>
          Price
          <input
            name="price"
            type="number"
            step="0.01"
            required
            aria-invalid={Boolean(errors.price)}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        {errors.price && (
          <p className="error" role="alert">
            {errors.price}
          </p>
        )}

        <label>
          Category
          <select
            name="category"
            required
            aria-invalid={Boolean(errors.category)}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select one…</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        {errors.category && (
          <p className="error" role="alert">
            {errors.category}
          </p>
        )}

        <div className="ex1__actions">
          <button type="submit" disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </button>
          <Link to="/ex1" className="link">
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}