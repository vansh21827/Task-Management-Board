import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">

      <div className="search-box">

        <span className="search-icon">
          🔍
        </span>

        <input
          type="text"
          className="search-input"
          placeholder="Search tasks by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {searchTerm && (
          <button
            className="clear-search"
            onClick={() => setSearchTerm("")}
            title="Clear Search"
          >
            ✕
          </button>
        )}

      </div>

    </div>
  );
}

export default SearchBar;