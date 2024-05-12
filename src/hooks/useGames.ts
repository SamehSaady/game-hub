import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";
import { FetchGamesResponse, Game } from "../services/game-service";
import gameService from "../services/game-service";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = gameService.getAll();

    request
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return cancel;
  }, []);

  return { games, setGames, error, setError, isLoading };
};

export default useGames;
