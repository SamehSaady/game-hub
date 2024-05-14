import {
  Button,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../../hooks/usePlatforms";
import { Platform } from "../../services/platform-service";
import PlatformIcon from "./gameGridComps/PlatformIcon";

interface Props {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { platforms, error } = usePlatforms();
  const allPlatforms = "All Platforms";

  if (error) return;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {
          <HStack>
            <PlatformIcon platform={selectedPlatform} />
            <Text>{selectedPlatform?.name || allPlatforms}</Text>
          </HStack>
        }
      </MenuButton>
      <MenuList>
        {[null, ...platforms].map((platform) => (
          <MenuItem
            key={platform?.id}
            icon={<PlatformIcon platform={platform} />}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform?.name || allPlatforms}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
