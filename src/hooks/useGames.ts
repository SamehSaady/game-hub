import { GameQuery } from "../App";
import gameService from "../services/game-service";
import { Game } from "../services/game-service";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    gameService,
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery.genre?.id, gameQuery.platform?.id]
  );

  return { games: data, error, isLoading };
};

export default useGames;
