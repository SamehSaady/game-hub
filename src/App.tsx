import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/navBarComps/NavBar";
import GameGrid from "./components/mainComps/gameGridComps/GameGrid";
import GenreList from "./components/sidePanelComps/GenreList";
import { useState } from "react";
import { Genre } from "./services/genre-service";
import PlatformSelector from "./components/mainComps/PlatformSelector";
import { Platform } from "./services/platform-service";
import SortSelector, { sortOrders } from "./components/mainComps/SortSelector";
import { SortOrder } from "./components/mainComps/SortSelector";
import GameHeading from "./components/mainComps/GameHeading";

// [null] for [genre] or [platform] shall retrieve all games (no specific genre or platform).
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder;
  searchText: string;
}

export const globalPadding = 6;

function App() {
  // For [base] [templateAreas]:
  // First Row has one Column: [nav].
  // Second Row has one Column: [main].

  // For [lg] [templateAreas]:
  // First Row has two Columns: [nav] and [nav].
  // Second Row has two Columns: [aside] and [main].

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: sortOrders[0],
    searchText: "",
  });

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"', // Mobile layout
        lg: '"nav nav" "aside main"', // Desktop layout (>= 992px)
      }}
      templateColumns={{
        base: "1fr", // [1 fraction]: The column stetches and takes all the available space.
        lg: "250px 1fr", // The first column will be [250px] and the second one will stetche and take all the available space.
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText: string) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingLeft={globalPadding}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={globalPadding}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={globalPadding} paddingBottom={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(selectedPlatform: Platform) =>
                setGameQuery({ ...gameQuery, platform: selectedPlatform })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectedSortOrder={(selectedSortOrder: SortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder: selectedSortOrder })
              }
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
