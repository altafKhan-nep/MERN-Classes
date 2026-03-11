import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

export default function AddForm() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();

  let handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button>Add Task</button>
      </form>
    </>
  );
}
