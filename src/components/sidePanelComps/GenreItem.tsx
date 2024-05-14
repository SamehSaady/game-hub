import { Genre } from "../../services/genre-service";
import { Button, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  genre: Genre;
  onSelectGenre: () => void;
  highlight: boolean;
}

const GenreItem = ({ genre, onSelectGenre, highlight }: Props) => {
  return (
    <Button
      width="100%"
      fontWeight={highlight ? "bold" : "normal"}
      bgColor={highlight ? "#252525" : ""}
      fontSize="lg"
      whiteSpace="wrap"
      textAlign="left"
      variant="ghost"
      display="flex" // To make children align horizontally.
      alignItems="center" // Align children vertically to center.
      onClick={onSelectGenre}
    >
      <Image
        boxSize="32px"
        borderRadius={8}
        objectFit="cover"
        marginRight={3}
        src={getCroppedImageUrl(genre.image_background)}
      />
      {/* // Added a wrapper <Box> to control text alignment */}
      <Text flex="1"> {genre.name}</Text>
    </Button>
  );
};

export default GenreItem;
