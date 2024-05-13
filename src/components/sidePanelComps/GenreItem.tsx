import { Genre } from "../../services/genre-service";
import { Button, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  genre: Genre;
  onSelectGenre: () => void;
  highlight: boolean;
}

const GenreItem = ({ genre, onSelectGenre, highlight }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        objectFit="cover"
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Button
        fontWeight={highlight ? "bold" : "normal"}
        fontSize="lg"
        whiteSpace="wrap"
        textAlign="left"
        variant="link"
        onClick={onSelectGenre}
      >
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
