import { Image } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../services/genre-service";

interface Props {
  genre: Genre | null;
}

const GenreImage = ({ genre }: Props) => {
  if (!genre) return null;

  return (
    <Image
      boxSize="40px"
      borderRadius={8}
      objectFit="cover"
      marginRight={3}
      src={getCroppedImageUrl(genre.image_background)}
    />
  );
};

export default GenreImage;
