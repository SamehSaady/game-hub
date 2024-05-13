import {
  FaWindows,
  FaLinux,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaApple,
} from "react-icons/fa";
import { BiSolidJoystick } from "react-icons/bi";
import { PiComputerTowerBold } from "react-icons/pi";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineGames } from "react-icons/md";
import { BsJoystick } from "react-icons/bs";
import { IconType } from "react-icons";

const platformIconMap = (platformSlug: string) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    atari: BiSolidJoystick,
    "commodore-amiga": PiComputerTowerBold,
    sega: SiSega,
    "3do": MdOutlineGames,
    "neo-geo": BsJoystick,
    web: BsGlobe,
  };

  return iconMap[platformSlug];
};

export default platformIconMap;
