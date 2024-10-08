import { useState } from "react";

export default function NewTask({ onAdd, setMessage }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleEnteredTask(event) {
    setEnteredTask(event.target.value);
  }

  function addTask() {
    if (enteredTask !== "") {
      onAdd(enteredTask);
      setEnteredTask("");
    } else if (enteredTask === "") {
      setMessage("You can't add an empty task!");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleEnteredTask}
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button onClick={addTask} className="text-stone-700 hover:text-stone-950">
        Add Task
      </button>
    </div>
  );
}
