import React from "react";
import PropTypes from "prop-types";

const Movie = ({ title, genres, summary, year, poster, id }) => {
  return (
    <div className="movie">
      <img className="movie__poster" src={poster} />
      <div className="movie__contents">
        <h2 className="movie__title">{title}</h2>
        <h2 className="movie__year">{year}</h2>
        <h2 className="movie__genres">{genres}</h2>
        <h2 className="movie__summary">{summary.slice(0, 180)}...</h2>
      </div>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
