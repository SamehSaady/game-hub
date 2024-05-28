import { HStack, Heading, Image, Show } from "@chakra-ui/react";
import logo from "../../assets/icons8-game-controller-windows-11-color-96.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { globalPadding } from "../../App";

interface Props {
  colorMode: string;
  toggleColorMode: () => void;
  onSearch: (searchText: string) => void;
}

const NavBar = ({ colorMode, toggleColorMode, onSearch }: Props) => {
  return (
    <HStack paddingY="10px" paddingX={globalPadding} spacing="20px">
      <Image src={logo} alt="Game Hub" boxSize="60px" />
      <Show above="sm">
        <Heading
          className="russo-one-regular-font" // Google fonts aren't working with Chakra UI.
          as="h1"
          fontSize="3xl"
          paddingBottom={1}
        >
          GameHub
        </Heading>
      </Show>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
      />
    </HStack>
  );
};

export default NavBar;
