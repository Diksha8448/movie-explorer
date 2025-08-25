import React from "react";
import MovieCard from "./MovieCard";


export default function MovieList({ movies, favorites, onToggleFavorite }) {
return (
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {movies.map((movie) => (
        <MovieCard
        key={movie.imdbID}
        movie={movie}
        isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
        onToggleFavorite={onToggleFavorite}
        />
    ))}
</div>
);
}