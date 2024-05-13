import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navBarComps/NavBar";
import GameGrid from "./components/mainComps/gameGridComps/GameGrid";
import GenreList from "./components/sidePanelComps/GenreList";
import { useState } from "react";
import { Genre } from "./services/genre-service";
import PlatformSelector from "./components/mainComps/PlatformSelector";

function App() {
  // For [base] [templateAreas]:
  // First Row has one Column: [nav].
  // Second Row has one Column: [main].

  // For [lg] [templateAreas]:
  // First Row has two Columns: [nav] and [nav].
  // Second Row has two Columns: [aside] and [main].

  // [null] shall retrieve all games (no specific genre).
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
