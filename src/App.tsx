import { Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import NavBar from "./components/navBarComps/NavBar";
import GameGrid from "./components/mainComps/gameGridComps/GameGrid";
import GenreList from "./components/sidePanelComps/GenreList";
import { useState } from "react";
import { Genre } from "./services/genre-service";
import { Platform } from "./services/platform-service";
import { sortOrders } from "./components/mainComps/FiltersComps/SortSelector";
import { SortOrder } from "./components/mainComps/FiltersComps/SortSelector";
import FiltersContainer from "./components/mainComps/FiltersComps/FiltersContainer";
import useGenresFetcher from "./hooks/useGenresFetcher";

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

  const { colorMode, toggleColorMode } = useColorMode();

  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: sortOrders[0],
    searchText: "",
  });

  const fetchedGenres = useGenresFetcher();

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"', // Mobile layout
        lg: '"nav nav" "aside main"', // Desktop layout (>= 992px)
      }}
      templateColumns={{
        base: "1fr", // [1 fraction]: The column stetches and takes all the available space.
        lg: "250px 1fr", // The first column will be [250px] and the second one will stretched and take all the available space.
      }}
    >
      <GridItem area="nav">
        <NavBar
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
          onSearch={(searchText: string) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            fetchedGenres={fetchedGenres}
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre: Genre | null) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
            colorMode={colorMode}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <FiltersContainer
          gameQuery={gameQuery}
          setGameQuery={setGameQuery}
          fetchedGenres={fetchedGenres}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
