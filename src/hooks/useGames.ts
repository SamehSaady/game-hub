import gameService from "../services/game-service";
import { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) => {
  const { data, error, isLoading } = useData<Game>(
    gameService,
    {
      params: { genres: selectedGenre?.id },
    },
    [selectedGenre?.id]
  );

  return { games: data, error, isLoading };
};

export default useGames;
