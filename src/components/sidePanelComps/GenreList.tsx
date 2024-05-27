import { List, ListItem, SkeletonText } from "@chakra-ui/react";
import arrUtils from "../../utils/arrUtils";
import GenreListItem from "./GenreListItem";
import { Genre } from "../../services/genre-service";
import { globalPadding } from "../../App";

interface Props {
  fetchedGenres: {
    genres: Genre[];
    error: string;
    isLoading: boolean;
  };
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre | null) => void;
  colorMode: string;
}

const GenreList = ({
  fetchedGenres,
  selectedGenre,
  onSelectGenre,
  colorMode,
}: Props) => {
  const skeletons = arrUtils.getRangeFromZero(15);

  if (fetchedGenres.error) return null;

  return (
    <>
      {/* <Heading fontSize="2xl" paddingLeft={globalPadding} paddingBottom={3}>
        Genres
      </Heading> */}
      <List paddingLeft={globalPadding} paddingTop={4}>
        {fetchedGenres.isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY="12px">
              <SkeletonText noOfLines={2} />
            </ListItem>
          ))}

        {fetchedGenres.isLoading ||
          [null, ...fetchedGenres.genres].map((genre) => (
            <ListItem key={genre?.id} paddingY="2px">
              <GenreListItem
                genre={genre}
                onSelectGenre={() => onSelectGenre(genre)}
                highlight={genre?.id === selectedGenre?.id}
                colorMode={colorMode}
              />
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
