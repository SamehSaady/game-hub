import {
  Button,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../services/platform-service";
import PlatformIcon from "./gameGridComps/PlatformIcon";

interface Props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { platforms, error, isLoading } = usePlatforms();

  if (error) return;

  // The first two divs inside HStack are created to align the Menu with the Game Grid.
  return (
    <HStack>
      <div></div>
      <div></div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {isLoading ? (
            <Spinner />
          ) : selectedPlatform === null ? (
            "Platform"
          ) : (
            <HStack>
              <PlatformIcon platform={selectedPlatform} />
              <Text>{selectedPlatform.name}</Text>
            </HStack>
          )}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              key={platform.id}
              icon={<PlatformIcon platform={platform} />}
              onClick={() => onSelectedPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default PlatformSelector;
