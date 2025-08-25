// src/components/Favorites.js
import React from "react";
import MovieCard from "./MovieCard";

export default function Favorites({ favorites, onToggleFavorite }) {
  return (
    <div className="favorites">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet ⭐</p>
      ) : (
        favorites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={true}
            onToggleFavorite={onToggleFavorite}
          />
        ))
      )}
    </div>
  );
}
