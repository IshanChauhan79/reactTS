import { FC } from "react";
import classes from "./TodoItem.module.css";

const TodoItem: FC<{ text: string; deleteTodo: () => void }> = ({
  text,
  deleteTodo,
}) => {
  return (
    <li className={classes.item} onClick={deleteTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
