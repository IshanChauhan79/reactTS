import { FC } from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((el) => (
        <TodoItem key={el.id} text={el.text} />
      ))}
    </ul>
  );
};

export default Todos;
