import { useState } from "react";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos((prev) => [...prev, new Todo(newTodo)]);
  };

  return (
    <div>
      <NewTodo addTodo={addTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
