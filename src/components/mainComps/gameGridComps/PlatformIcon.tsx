import { Icon } from "@chakra-ui/react";
import { Platform } from "../../../services/platform-service";
import platformIconMap from "../../../services/platform-icon-map";

interface Props {
  platform: Platform | null;
}

const PlatformIcon = ({ platform }: Props) => {
  if (!platform) return; // No icon for "All Platforms" list item.

  return <Icon as={platformIconMap(platform.slug)} color="gray.500" />;
};

export default PlatformIcon;
