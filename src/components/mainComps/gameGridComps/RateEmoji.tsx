import bullsEye from "../../../assets/bulls-eye (160x160).webp";
import thumbsUp from "../../../assets/thumbs-up (160x160).webp";
import meh from "../../../assets/meh (160x160).webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const rateEmojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px", marginTop: 1 },
  4: { src: thumbsUp, alt: "Recommended", boxSize: "25px", marginTop: 1 },
  5: { src: bullsEye, alt: "Exceptional", boxSize: "35px" },
};

const RateEmoji = ({ rating }: Props) => {
  // Skip emojies for games with rating less than 3:
  if (rating < 3) return null;

  return <Image {...rateEmojiMap[rating]} />;
};

export default RateEmoji;
