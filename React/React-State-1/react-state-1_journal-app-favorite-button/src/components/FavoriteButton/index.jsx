import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  // This should be a state variable.
  // const isFavorite = false;
  const [isFavorite, setIsFavorite] = useState(false);
  function onFavoriteButtonClick() {
    setIsFavorite(!isFavorite);
    console.log("favorite button clicked");
  }
  return (
    <button
      className="favorite-button"
      onClick={onFavoriteButtonClick}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
