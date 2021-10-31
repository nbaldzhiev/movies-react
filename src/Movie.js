import React, { useState, useEffect } from "react";
import './Movie.css';

function Movie({ movie }) {

  const [imageUrl, setImageUrl] = useState('');

  const apiKey = 'c325c6385fbc64f5360ebbd46b419ec4';
  const baseUrl = 'https://api.themoviedb.org/3/';

  async function getImageUrl() {
      const response = await fetch(baseUrl + `configuration?api_key=${apiKey}`);
      const data = await response.json();
      console.log(data.images.secure_base_url)
      setImageUrl(data.images.secure_base_url + 'w342');
  }

  useEffect(() => {
    getImageUrl();
  }, [])

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(to bottom right, rgba(1.57%, 8.63%, 14.51%, 1.00), rgba(1.57%, 8.63%, 14.51%, 0.84)), url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
    objectFit: 'cover'
  }

  console.log(movie)
  return (
    <div className="movie-item" style={backgroundImageStyle}>
      <div className="image-container">
        <img className="movie-poster" src={imageUrl + movie.poster_path} alt="movie poster"></img>
      </div>
      <div className="info-container">
        <h1 className="movie-title">{movie.media_type === 'movie' ? movie.original_title : movie.name}</h1>
        <p className="release-date">{movie.release_date} (<span className="original_language">{movie.original_language}</span>)</p>
        <h3 className="overview-title">Overview</h3>
        <p className="overview">{movie.overview.slice(0, 410)}...</p>
        <p className="rating-title"><strong>PMDB</strong> Rating</p>
        <div className="rating">
          <img className="rating-image" alt="rating-star" src="https://cdn-icons-png.flaticon.com/512/143/143547.png" width="28" height="28" style={{display: 'block'}}></img>
          <div className="rating-stats">
            <p className="rating-value">{movie.vote_average}/10</p>
            <p className="rating-count">{movie.vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
