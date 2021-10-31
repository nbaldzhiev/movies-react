import React, { useState } from "react";
import './App.css';
import Movie from "./Movie.js";

function App() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const apiKey = 'c325c6385fbc64f5360ebbd46b419ec4';
  const baseUrl = 'https://api.themoviedb.org/3/';
  const multiSearchEndpoint = 'search/multi';

  async function getMovies(event) {
    event.preventDefault();
    const response = await fetch(`${baseUrl}${multiSearchEndpoint}?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    setMovies(data.results);
  }

  function sliceMovies() {
    const allMovies = movies.filter(movie => movie.poster_path).sort((a, b) => (a.popularity > b.popularity) ? -1 : ((b.popularity > a.popularity) ? 1 : 0)).map(movie => <Movie movie={movie} key={movie.id} />);
    if (allMovies.length > 10) {
      return allMovies.slice(0, 10)
    } else {
      return allMovies
    }
  }

  return (
    <div className="App">
      <header>
          <div className="header-bar">
              <p>PMDB - The Poor Man's Movie Database</p>
          </div>
      </header>
      <main>
          <div id="search-section">
              <h1>Welcome.</h1>
              <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
              <form onSubmit={getMovies}>
                  <label htmlFor="inputQuery">
                      <input type="text" id="inputQuery" name="inputQuery" onChange={(event) => setQuery(event.target.value)} value={query} placeholder="i.e. The Dark Knight or Christopher Nolan"></input>
                  </label>
                  <button type="submit">Search</button>
              </form>
          </div>
          <div id="movies-list">
            {sliceMovies()}
          </div>
      </main>
    </div>
  );
}

export default App;
