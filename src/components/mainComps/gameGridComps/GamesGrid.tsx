import { SimpleGrid, Text } from "@chakra-ui/react";
import useGamesFetcher from "../../../hooks/useGamesFetcher";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import arrUtils from "../../../utils/arrUtils";
import { GameQuery, globalPadding } from "../../../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGamesFetcher(gameQuery);
  const skeletons = arrUtils.getRangeFromZero(12);

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={globalPadding}
      padding={globalPadding}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {isLoading ||
        games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
