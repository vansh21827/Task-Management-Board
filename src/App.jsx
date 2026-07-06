import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AddTask from "./components/AddTask";
import TaskBoard from "./components/TaskBoard";

import useLocalStorage from "./hooks/useLocalStorage";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

function App() {

  // ==========================
  // Local Storage
  // ==========================

  const [tasks, setTasks] = useLocalStorage("tasks", []);

  // ==========================
  // Search
  // ==========================

  const [searchTerm, setSearchTerm] = useState("");
const [darkMode, setDarkMode] = useLocalStorage(
  "darkMode",
  false
);
  // ==========================
  // Add Task
  // ==========================

  const addTask = (text, priority) => {

    if (!text.trim()) return;

    const newTask = {

      id: Date.now(),

      text,

      priority,

      status: "todo",

      createdAt: new Date().toLocaleString(),

    };

    setTasks([...tasks, newTask]);

  };

  // ==========================
  // Delete Task
  // ==========================

  const deleteTask = (id) => {

    if (!window.confirm("Delete this task?")) return;

    setTasks(tasks.filter(task => task.id !== id));

  };

  // ==========================
  // Edit Task
  // ==========================

  const editTask = (id, updatedText) => {

    setTasks(

      tasks.map(task =>

        task.id === id

          ? {

              ...task,

              text: updatedText,

            }

          : task

      )

    );

  };

  // ==========================
  // Move Task
  // ==========================

  const moveTask = (id, direction) => {

    const order = [

      "todo",

      "inprogress",

      "done",

    ];

    setTasks(

      tasks.map(task => {

        if (task.id !== id) return task;

        const current = order.indexOf(task.status);

        const next =

          direction === "right"

            ? Math.min(current + 1, 2)

            : Math.max(current - 1, 0);

        return {

          ...task,

          status: order[next],

        };

      })

    );

  };

  // ==========================
  // Drag & Drop
  // ==========================

  const handleDragEnd = ({ active, over }) => {

    if (!over) return;

    const taskId = Number(active.id);

    const newStatus = over.id;

    setTasks(

      tasks.map(task =>

        task.id === taskId

          ? {

              ...task,

              status: newStatus,

            }

          : task

      )

    );

  };

  // ==========================
  // Statistics
  // ==========================

  const totalTasks = tasks.length;

  const todoCount = tasks.filter(

    task => task.status === "todo"

  ).length;

  const progressCount = tasks.filter(

    task => task.status === "inprogress"

  ).length;

  const doneCount = tasks.filter(

    task => task.status === "done"

  ).length;

  const progressPercentage =
  tasks.length === 0
    ? 0
    : Math.round((doneCount / tasks.length) * 100);
    
  // ==========================
  // UI
  // ==========================

  return (

  <div className={`app ${darkMode ? "dark" : "light"}`}>

      {/* Hero Section */}

  <Header
    total={totalTasks}
    todo={todoCount}
    progress={progressCount}
    done={doneCount}
    progressPercentage={progressPercentage}
    darkMode={darkMode}
    setDarkMode={setDarkMode}
/>
      {/* Controls */}

      <section className="controls">

        <SearchBar

          searchTerm={searchTerm}

          setSearchTerm={setSearchTerm}

        />

        <AddTask

          addTask={addTask}

        />

      </section>

      {/* Board */}

      <section className="board-section">

        <DndContext

          collisionDetection={closestCenter}

          onDragEnd={handleDragEnd}

        >

          <TaskBoard

            tasks={tasks}

            searchTerm={searchTerm}

            moveTask={moveTask}

            deleteTask={deleteTask}

            editTask={editTask}

          />

        </DndContext>

      </section>

    </div>

  );

}

export default App;