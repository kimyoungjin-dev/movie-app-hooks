import React, { useCallback, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

const useFetch = (callback, url) => {
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const response = await axios.get(url);
      callback(response);
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
  const [data, setData] = useState(null);
  const { Loading, error } = useFetch(
    setData,
    `https://yts-proxy.now.sh/list_movies.json?sort_by=rating`
  );

  return <>{Loading ? "Loading..." : <Movie data={data} error={error} />}</>;
};

export default App;
