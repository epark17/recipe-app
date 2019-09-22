import React, { useState } from 'react';
import './App.css';

import AllRecipes from './AllRecipes';
// import Search from './Search';

// Would like to separate form to Search Component but wondering how to work with query and handle methods...
const App = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const handleSearchChange = e => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearchChange}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      {/* <Search /> */}
      <AllRecipes query={query} />
    </div>
  );
};

export default App;
