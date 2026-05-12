import TaskBoard from "./ex1/taskboard";
import GreetingForm from "./ex2/greetingform";
import ProductList from "./ex3/productlist";

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
