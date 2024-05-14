import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../../assets/icons8-game-controller-windows-11-color-96.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" spacing="20px">
      <Image src={logo} alt="Game Hub" boxSize="60px" />
      <Heading id="websiteHeading" as="h1" fontSize="4xl" paddingBottom={1}>
        GameHub
      </Heading>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
