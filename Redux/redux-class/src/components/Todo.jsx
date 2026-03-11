import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todos/todoSlice";
import { markAsDone } from "../features/todos/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  const markHandler = (id) => {
    dispatch(markAsDone(id));
  };
  return (
    <>
      <h2>Todos List App</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            {todo.task}
            <button onClick={() => clickHandler(todo.id)}>Delete</button>
            <button onClick={() => markHandler(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
    </>
  );
}
