import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import genreService, { Genre } from "../services/genre-service";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = genreService.getAll();

    request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return cancel;
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
