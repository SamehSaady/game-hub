import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Genre } from "../../../services/genre-service";
import { BsChevronDown } from "react-icons/bs";
import GenreImage from "../../GenreImage";

interface Props {
  fetchedGenres: {
    genres: Genre[];
    error: string;
    isLoading: boolean;
  };
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre | null) => void;
}

const GenreSelector = ({
  fetchedGenres,
  selectedGenre,
  onSelectGenre,
}: Props) => {
  const allGenres = "All Genres";
  if (fetchedGenres.error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        <Text>{selectedGenre?.name || allGenres}</Text>
      </MenuButton>
      <MenuList>
        {[null, ...fetchedGenres.genres].map((genre) => (
          <MenuItem
            key={genre?.id || allGenres}
            onClick={() => onSelectGenre(genre)}
          >
            <HStack spacing={1}>
              <GenreImage genre={genre} />
              <Text> {genre === null ? allGenres : genre.name}</Text>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
