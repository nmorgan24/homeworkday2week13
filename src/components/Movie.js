import React from "react";

const Movie = (props) => {
  const { name, year, rating, image } = props.movie;

  return (
    <div className="Movie">
      <h2>{name}</h2>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Movie;