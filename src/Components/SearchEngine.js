import React from "react";

function SearchEngine({ query, setQuery, search }) {
  //handler function
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      search(e);
    }
  };

  return (
    <div className="SearchEngine">
      <input
        type="text"
        className="city-search"
        placeholder="enter city name"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={search}><i className="fas fa-search" style={{color:"black",fontSize:"17px" }}>Search</i></button>
    </div>
  );
}

export default SearchEngine;
