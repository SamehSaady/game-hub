import { Genre } from "../services/genre-service";
import { HStack, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genre: Genre;
}

const GenreItem = ({ genre }: Props) => {
  return (
    <HStack>
      <Image
        boxSize="32px"
        borderRadius={8}
        src={getCroppedImageUrl(genre.image_background)}
      />
      <Text fontSize="lg">{genre.name}</Text>
    </HStack>
  );
};

export default GenreItem;
