import { HStack, Switch, Text } from "@chakra-ui/react";

interface Props {
  colorMode: string;
  toggleColorMode: () => void;
}

const ColorModeSwitch = ({ colorMode, toggleColorMode }: Props) => {
  return (
    <HStack paddingRight={3}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
