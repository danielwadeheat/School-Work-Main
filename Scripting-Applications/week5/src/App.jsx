import TaskBoard from "./ex1/TaskBoard";
import GreetingForm from "./ex2/GreetingForm";
import ProductList from "./ex3/ProductList";

export default function App() {
  return (
    <main className="page">
      <h1>Week 5 - Vite React Exercises</h1>
      <TaskBoard />
      <GreetingForm />
      <ProductList />
    </main>
  );
}
