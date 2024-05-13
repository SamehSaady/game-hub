import { Platform } from "../../../services/platform-service";
import { HStack } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // HStack: marginY = {2} means {2 * theme.space}
  // where the default value for [theme.space] is 4px.
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <PlatformIcon key={platform.id} platform={platform} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
