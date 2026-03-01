export default function ProductList() {
  const products = [
    { id: "p1", name: "Laptop" },
    { id: "p2", name: "Keyboard" },
    { id: "p3", name: "Mouse" }
  ];

  return (
    <section>
      <h2>Exercise 3: List & Keys</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </section>
  );
}
