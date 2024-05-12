import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  // First Row has two Columns: [nav] and [nav].
  // Second Row has two Columns: [aside] and [main].
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"', // Mobile layout
        lg: '"nav nav" "aside main"', // Desktop layout (>= 992px)
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
