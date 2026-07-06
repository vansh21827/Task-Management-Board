import "./TaskBoard.css";
import Column from "./Column";

function TaskBoard({
  tasks,
  searchTerm,
  moveTask,
  deleteTask,
  editTask,
}) {

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const todoTasks = filteredTasks.filter(
    (task) => task.status === "todo"
  );

  const progressTasks = filteredTasks.filter(
    (task) => task.status === "inprogress"
  );

  const doneTasks = filteredTasks.filter(
    (task) => task.status === "done"
  );

  return (
    <div className="taskboard">

      <Column
        id="todo"
        title="📋 To Do"
        color="todo"
        tasks={todoTasks}
        moveTask={moveTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <Column
        id="inprogress"
        title="🚀 In Progress"
        color="progress"
        tasks={progressTasks}
        moveTask={moveTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <Column
        id="done"
        title="✅ Done"
        color="done"
        tasks={doneTasks}
        moveTask={moveTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />

    </div>
  );
}

export default TaskBoard;