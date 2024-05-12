import {
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import arrUtils from "../utils/arrUtils";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  const skeletons = arrUtils.getRangeFromZero(15);

  if (error) return null;

  return (
    <List>
      {/* {isLoading && <Spinner />} */}
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY="8px">
            <SkeletonText noOfLines={2} />
          </ListItem>
        ))}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
