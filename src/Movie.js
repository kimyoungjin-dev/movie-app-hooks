import React from "react";
import PropTypes from "prop-types";

const Movie = ({ title, genres, summary, year, poster, id }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>{genres}</h2>
      <h2>{summary.slice(0, 180)}...</h2>
      <h2>{year}</h2>
      <img src={poster} />
    </div>
  );
};

Movie.PropTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
