import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import "./TaskCard.css";

function TaskCard({
  task,
  moveTask,
  deleteTask,
  editTask,
}) {

  const [editing, setEditing] = useState(false);

  const [text, setText] = useState(task.text);

  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({
      id: task.id,
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const saveTask = () => {

    if (!text.trim()) return;

    editTask(task.id, text);

    setEditing(false);

  };

  return (

   <div
  ref={setNodeRef}
  style={style}
  className="task-card"
>

      {/* Priority */}

      <div className={`priority ${task.priority.toLowerCase()}`}>

        {task.priority === "High" && "🔴 High"}

        {task.priority === "Medium" && "🟡 Medium"}

        {task.priority === "Low" && "🟢 Low"}

      </div>
      <div
  className="drag-handle"
  {...listeners}
  {...attributes}
>
  ⠿ Drag
</div>

      {/* Task */}

      {editing ? (

        <textarea
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

      ) : (

        <h3 className="task-title">

          {task.text}

        </h3>

      )}

      {/* Date */}

      <div className="task-date">

        📅 {task.createdAt}

      </div>

      {/* Actions */}

      <div className="task-actions">

        {task.status !== "todo" && (

          <button
            className="move-btn"
            onClick={() => moveTask(task.id, "left")}
          >
            ◀
          </button>

        )}

        {task.status !== "done" && (

          <button
            className="move-btn"
            onClick={() => moveTask(task.id, "right")}
          >
            ▶
          </button>

        )}

        {editing ? (

          <>
            <button
              className="save-btn"
              onClick={saveTask}
            >
              💾
            </button>

            <button
              className="cancel-btn"
              onClick={() => {
                setEditing(false);
                setText(task.text);
              }}
            >
              ✖
            </button>
          </>

        ) : (

          <button
            className="edit-btn"
            onClick={() => setEditing(true)}
          >
            ✏
          </button>

        )}

        <button
  className="delete-btn"
  onClick={(e) => {
    e.stopPropagation();
    deleteTask(task.id);
  }}
>
  🗑
</button>

      </div>

    </div>

  );

}

export default TaskCard;