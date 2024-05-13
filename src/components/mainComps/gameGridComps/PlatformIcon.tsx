import { Icon } from "@chakra-ui/react";
import { Platform } from "../../../services/platform-service";
import platformIconMap from "../../../services/platform-icon-map";

interface Props {
  platform: Platform;
}

const PlatformIcon = ({ platform }: Props) => {
  return <Icon as={platformIconMap(platform.slug)} color="gray.500" />;
};

export default PlatformIcon;
