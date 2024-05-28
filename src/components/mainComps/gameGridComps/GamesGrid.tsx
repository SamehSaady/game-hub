import { SimpleGrid, Text } from "@chakra-ui/react";
import useGamesFetcher from "../../../hooks/useGamesFetcher";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import arrUtils from "../../../utils/arrUtils";
import { GameQuery, globalPadding } from "../../../App";
import { Game } from "../../../services/game-service";

interface Props {
  gameQuery: GameQuery;
  fetchedGames: {
    games: Game[];
    count: number;
    error: string;
    isLoading: boolean;
  };
}

const GamesGrid = ({ gameQuery, fetchedGames }: Props) => {
  const skeletons = arrUtils.getRangeFromZero(12);

  if (fetchedGames.error) return <Text>{fetchedGames.error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={globalPadding}
      padding={globalPadding}
    >
      {fetchedGames.isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {fetchedGames.isLoading ||
        fetchedGames.games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
