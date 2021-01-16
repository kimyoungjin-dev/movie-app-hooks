import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

const useFetch = (callback, url) => {
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(url);
      callback(movies);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return { Loading, error };
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const { Loading, error } = useFetch(
    setMovies,
    `https://yts-proxy.now.sh/list_movies.json?sort_by=rating`
  );
  console.log(movies);

  return (
    <>
      <div className="container">
        {Loading ? (
          <div className="LoadingScreen">
            <span>Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((e) => (
              <Movie
                key={e.id}
                title={e.title}
                poster={e.medium_cover_image}
                summary={e.summary}
                year={e.year}
                genres={e.genres}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
