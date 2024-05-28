import { Genre } from "../../services/genre-service";
import { Button, Text } from "@chakra-ui/react";
import GenreImage from "../GenreImage";
import { allGenres } from "../../App";
import {
  getHighlightBGColor,
  getHighlightFontWeight,
} from "../../services/highlight-button-service";

interface Props {
  genre: Genre | null;
  onSelectGenre: () => void;
  highlight: boolean;
  colorMode: string;
}

const GenreListItem = ({
  genre,
  onSelectGenre,
  highlight,
  colorMode,
}: Props) => {
  return (
    <Button
      width="100%"
      height="50px"
      fontWeight={getHighlightFontWeight(highlight)}
      bgColor={getHighlightBGColor(highlight, colorMode)}
      // colorScheme={highlight ? "blue" : ""}
      fontSize="lg"
      whiteSpace="wrap"
      textAlign="left"
      variant="ghost"
      display="flex" // To make children align horizontally.
      alignItems="center" // Align children vertically to center.
      onClick={onSelectGenre}
    >
      <GenreImage genre={genre} />
      <Text flex="1"> {genre === null ? allGenres : genre.name}</Text>
    </Button>
  );
};

export default GenreListItem;
