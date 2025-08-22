// src/components/FavoriteButton.js
import React from "react";

export default function FavoriteButton({ isFavorite, onClick }) {
  return (
    <button onClick={onClick}>
      {isFavorite ? "❤️ Remove from Favorites" : "➕ Add to Favorites"}
    </button>
  );
}
