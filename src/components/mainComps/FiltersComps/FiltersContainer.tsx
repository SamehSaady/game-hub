import { GameQuery, globalPadding } from "../../../App";
import { Box, HStack, Show } from "@chakra-ui/react";
import GameHeading from "./GameHeading";
import PlatformSelector from "./PlatformSelector";
import { Platform } from "../../../services/platform-service";
import SortSelector, { SortOrder } from "./SortSelector";
import GenreSelector from "./GenreSelector";
import { Genre } from "../../../services/genre-service";

interface Props {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
  fetchedGenres: {
    genres: Genre[];
    error: string;
    isLoading: boolean;
  };
}

const FiltersContainer = ({
  gameQuery,
  setGameQuery,
  fetchedGenres,
}: Props) => {
  return (
    <Box paddingX={globalPadding}>
      <GameHeading gameQuery={gameQuery} />
      <HStack spacing={globalPadding} paddingBottom={2}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectedPlatform={(selectedPlatform: Platform | null) =>
            setGameQuery({
              ...gameQuery,
              platform: selectedPlatform,
              pageNum: 1,
            })
          }
        />
        <Show below="lg">
          <GenreSelector
            fetchedGenres={fetchedGenres}
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre | null) =>
              setGameQuery({ ...gameQuery, genre: genre, pageNum: 1 })
            }
          />
        </Show>
        <SortSelector
          selectedSortOrder={gameQuery.sortOrder}
          onSelectedSortOrder={(selectedSortOrder: SortOrder) =>
            setGameQuery({
              ...gameQuery,
              sortOrder: selectedSortOrder,
              pageNum: 1,
            })
          }
        />
      </HStack>
    </Box>
  );
};

export default FiltersContainer;
