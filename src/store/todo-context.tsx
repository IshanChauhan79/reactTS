import { FC, createContext, useState } from "react";
import Todo from "../models/todo";

type TodosCoontextApi = {
  items: Todo[];
  addTodo: (newTodo: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosCoontextApi>({
  items: [],
  addTodo: (newTodo: string) => {
    newTodo;
  },
  deleteTodo: (id: string) => {
    id;
  },
});

interface Props {
  children: React.ReactNode;
}

export const TodosContextProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos((prev) => [...prev, new Todo(newTodo)]);
  };
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  const contextValue: TodosCoontextApi = {
    addTodo,
    deleteTodo,
    items: todos,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
