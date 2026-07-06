import "./Column.css";
import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard";

function Column({
  id,
  title,
  color,
  tasks,
  moveTask,
  deleteTask,
  editTask,
}) {

  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`column ${color}`}
    >

      {/* ==========================
          COLUMN HEADER
      ========================== */}

      <div className="column-header">

        <div className="column-title">

          <h2>{title}</h2>

          <span className="task-count">

            {tasks.length}

          </span>

        </div>

      </div>

      {/* ==========================
          TASKS
      ========================== */}

      <div className="column-body">

        {tasks.length === 0 ? (

          <div className="empty-state">

            <div className="empty-icon">

              👜

            </div>

            <h3>No Tasks</h3>

            <p>

              Drag a task here or create a new one.

            </p>

          </div>

        ) : (

          tasks.map((task) => (

            <TaskCard
              key={task.id}
              task={task}
              moveTask={moveTask}
              deleteTask={deleteTask}
              editTask={editTask}
            />

          ))

        )}

      </div>

    </div>
  );
}

export default Column;