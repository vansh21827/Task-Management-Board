import "./Header.css";

function Header({
    total,
    todo,
    progress,
    done,
    progressPercentage,
    darkMode,
    setDarkMode,
}) {
  return (
    <header className="header">

      {/* Hero Section */}

      <div className="header-content">

        <div className="header-text">
          <h1>📋 TaskFlow</h1>
          <p>
            Organize, track and complete your work with a modern Kanban
            task management board.
          </p>
         <button
    className="theme-toggle"
    onClick={() => setDarkMode(!darkMode)}
>
    {darkMode ? "☀️" : "🌙"}
</button>
        </div>

      </div>
      

      {/* Statistics */}
<div className="progress-section">

    <div className="progress-text">

        <span>Project Progress</span>

        <span>{progressPercentage}%</span>

    </div>

    <div className="progress-bar">

        <div
            className="progress-fill"
            style={{ width: `${progressPercentage}%` }}
        ></div>

    </div>

    <p>{done} of {total} tasks completed</p>
<div className="progress-section">

</div>
</div>
      <div className="stats-container">

        <div className="stat-card total">
          <div className="stat-icon">📊</div>

          <div className="stat-info">
            <h2>{total}</h2>
            <span>Total Tasks</span>
          </div>
        </div>

        <div className="stat-card todo">
          <div className="stat-icon">📋</div>

          <div className="stat-info">
            <h2>{todo}</h2>
            <span>To Do</span>
          </div>
        </div>

        <div className="stat-card progress">
          <div className="stat-icon">🚀</div>

          <div className="stat-info">
            <h2>{progress}</h2>
            <span>In Progress</span>
          </div>
        </div>

        <div className="stat-card done">
          <div className="stat-icon">✅</div>

          <div className="stat-info">
            <h2>{done}</h2>
            <span>Completed</span>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;