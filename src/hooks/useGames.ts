import gameService from "../services/game-service";
import { Game } from "../services/game-service";
import useData from "./useData";

const useGames = () => {
  const { data, error, isLoading } = useData<Game>(gameService);

  return { games: data, error, isLoading };
};

export default useGames;
