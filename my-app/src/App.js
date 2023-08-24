// src/App.js
import React, { useState } from "react";
import { fetchUsers } from "./api";
import "./App.css";
import BearCard from "./components/BearCard";
function App() {
  const [query, setQuery] = useState("");
  const [beers, setBeers] = useState([]);

  const handleSearch = async () => {
    const data = await fetchUsers(query);
    setBeers(data);
  };

  return (
    <div className="App">
      <h1>Beer App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for beers"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="beer-list">
        {beers.map(beer => <BearCard key={beer.id} beer={beer} />)}
      </div>
    </div>
  );
}

export default App;
