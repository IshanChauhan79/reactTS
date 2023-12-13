import { useContext } from "react";
import { TodosContext } from "../store/todo-context";

const useTodoContext = () => useContext(TodosContext);

export default useTodoContext;
