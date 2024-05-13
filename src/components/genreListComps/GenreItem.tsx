import { Genre } from "../../services/genre-service";
import { Button, HStack, Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url";

interface Props {
  genre: Genre;
  onSelectGenre: (genre: Genre) => void;
}

const GenreItem = ({ genre, onSelectGenre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Button fontSize="lg" variant="link" onClick={() => onSelectGenre(genre)}>
        {genre.name}
      </Button>
    </HStack>
  );
};

export default GenreItem;
