import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import useTodoContext from "./customHooks/useTodoContext";

function App() {
  const { addTodo, items, deleteTodo } = useTodoContext();
  return (
    <div>
      <NewTodo addTodo={addTodo} />
      <Todos items={items} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
