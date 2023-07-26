import React from "react";
import Movie from "./Movie";

const Movies = (props) => {
  const { movies } = props;

  return (
    <div className="Movies">
      {movies.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;