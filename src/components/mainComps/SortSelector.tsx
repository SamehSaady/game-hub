import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem key={1}>Relevance</MenuItem>
        <MenuItem key={2}>Date Added</MenuItem>
        <MenuItem key={3}>Name</MenuItem>
        <MenuItem key={4}>Release Date</MenuItem>
        <MenuItem key={5}>Popularity</MenuItem>
        <MenuItem key={6}>Average Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
