import { useRef, FC, FormEvent } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: FC<{ addTodo: (text: string) => void }> = ({ addTodo }) => {
  const textRef = useRef<HTMLInputElement>(null);

  const submithandler = (event: FormEvent) => {
    event.preventDefault();
    const value = textRef.current!.value.trim();
    textRef.current!.value = "";
    if (!value) return;
    addTodo(value);
  };

  return (
    <form className={classes.form} onSubmit={submithandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
