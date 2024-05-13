import gameService from "../services/game-service";
import { Game } from "../services/game-service";
import { Genre } from "../services/genre-service";
import { Platform } from "../services/platform-service";
import useData from "./useData";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const { data, error, isLoading } = useData<Game>(
    gameService,
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return { games: data, error, isLoading };
};

export default useGames;
