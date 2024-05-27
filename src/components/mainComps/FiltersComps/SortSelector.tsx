import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSortOrder: SortOrder;
  onSelectedSortOrder: (sortOrder: SortOrder) => void;
}

export interface SortOrder {
  apiValue: string;
  label: string;
}

// Sort order is ascendin by default in RAWG API.
// to reverse it, add [-] before the value sent to the API.
export const sortOrders: SortOrder[] = [
  { apiValue: "", label: "Relevance" }, // Default
  { apiValue: "-added", label: "Date Added" }, // Newest to oldest
  { apiValue: "name", label: "Name" }, // A to Z
  { apiValue: "-released", label: "Release Date" }, // Newly released to oldest
  { apiValue: "-metacritic", label: "Popularity" }, // high popularity to lowest
  { apiValue: "-rating", label: "Average Rating" }, // high rating to lowest
];

const SortSelector = ({ selectedSortOrder, onSelectedSortOrder }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {selectedSortOrder.label}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.label}
            value={order.apiValue}
            onClick={() => onSelectedSortOrder(order)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
