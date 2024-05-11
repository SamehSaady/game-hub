import { HStack, Image, Text } from "@chakra-ui/react";
// import logo from "../assets/icons8-game-controller-windows-11-color-32.png";
import logo from "../assets/icons8-game-controller-windows-11-color-96.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Game Hub</Text>
    </HStack>
  );
};

export default NavBar;
