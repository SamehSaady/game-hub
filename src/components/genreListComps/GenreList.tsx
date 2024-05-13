import { List, ListItem, SkeletonText } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import arrUtils from "../../utils/arrUtils";
import GenreItem from "./GenreItem";
import { Genre } from "../../services/genre-service";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
          <GenreItem genre={genre} onSelectGenre={onSelectGenre} />
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
