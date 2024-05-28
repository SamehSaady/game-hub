import { GameQuery } from "../App";
import gameService from "../services/game-service";
import { Game } from "../services/game-service";
import useDataFetcher from "./useDataFetcher";

const useGamesFetcher = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useDataFetcher<Game>(
    gameService,
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder.apiValue,
        search: gameQuery.searchText,
        page: gameQuery.pageNum,
        page_size: 20,
      },
    },
    [gameQuery]
  );

  return { games: data.results, count: data.count, error, isLoading };
};

export default useGamesFetcher;
