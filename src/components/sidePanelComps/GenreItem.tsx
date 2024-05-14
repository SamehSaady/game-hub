import { Genre } from "../../services/genre-service";
import { Button, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  genre: Genre | null;
  onSelectGenre: () => void;
  highlight: boolean;
  colorMode: string;
}

const GenreItem = ({ genre, onSelectGenre, highlight, colorMode }: Props) => {
  return (
    <Button
      width="100%"
      height="50px"
      fontWeight={highlight ? "bold" : "normal"}
      bgColor={highlight ? (colorMode === "dark" ? "#252525" : "#ededed") : ""}
      fontSize="lg"
      whiteSpace="wrap"
      textAlign="left"
      variant="ghost"
      display="flex" // To make children align horizontally.
      alignItems="center" // Align children vertically to center.
      onClick={onSelectGenre}
    >
      {genre && (
        <Image
          boxSize="40px"
          borderRadius={8}
          objectFit="cover"
          marginRight={3}
          src={getCroppedImageUrl(genre.image_background)}
        />
      )}
      {/* // Added a wrapper <Box> to control text alignment */}
      <Text flex="1"> {genre === null ? "All Genres" : genre.name}</Text>
    </Button>
  );
};

export default GenreItem;
