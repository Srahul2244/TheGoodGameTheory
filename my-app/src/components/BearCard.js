// src/BeerCard.js
import React from "react";

function BearCard({ beer }) {
  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
    </div>
  );
}

export default BearCard;
