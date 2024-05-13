import { Platform } from "../../services/game-service";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    adroid: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  // HStack: marginY = {2} means {2 * theme.space}
  // where the default value for [theme.space] is 4px.
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
