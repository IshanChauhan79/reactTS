import { FC } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: FC<{ items: Todo[]; deleteTodo: (id: string) => void }> = ({
  deleteTodo,
  items,
}) => {
  return (
    <ul className={classes.todos}>
      {items.map((el) => (
        <TodoItem
          key={el.id}
          text={el.text}
          deleteTodo={() => deleteTodo(el.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
