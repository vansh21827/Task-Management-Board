import { useState } from "react";
import "./AddTask.css";

function AddTask({ addTask }) {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    addTask(taskText, priority);

    setTaskText("");
    setPriority("Medium");
  };

  return (
    <div className="add-task-container">

      <form className="add-task-card" onSubmit={handleSubmit}>

        <div className="task-input-group">

          <label className="input-label">
          📋 Task Title
          </label>

          <input
            type="text"
            className="task-input"
            placeholder="Enter your next task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />

        </div>

        <div className="priority-group">

          <label className="input-label">
           📌 Priority
          </label>

          <select
            className="priority-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">🔴 HIGH</option>
            <option value="Medium">🟡 MEDIUM</option>
            <option value="Low">🟢 LOW</option>
          </select>

        </div>

        <button
          type="submit"
          className="add-task-btn"
        >
          ➕ Add Task
        </button>

      </form>

    </div>
  );
}

export default AddTask;