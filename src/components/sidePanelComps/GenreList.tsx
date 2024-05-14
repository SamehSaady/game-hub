import { Heading, List, ListItem, SkeletonText } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import arrUtils from "../../utils/arrUtils";
import GenreItem from "./GenreItem";
import { Genre } from "../../services/genre-service";
import { globalPadding } from "../../App";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre | null) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();
  const skeletons = arrUtils.getRangeFromZero(15);

  if (error) return null;

  return (
    <>
      {/* <Heading fontSize="2xl" paddingLeft={globalPadding} paddingBottom={3}>
        Genres
      </Heading> */}
      <List paddingLeft={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY="8px">
              <SkeletonText noOfLines={2} />
            </ListItem>
          ))}

        {[null, ...genres].map((genre) => (
          <ListItem key={genre?.id} paddingY="5px">
            <GenreItem
              genre={genre}
              onSelectGenre={() => onSelectGenre(genre)}
              highlight={genre?.id === selectedGenre?.id}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
