import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../../services/game-service";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../../services/image-url";
import RateEmoji from "./RateEmoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody paddingTop={2}>
        <HStack justifyContent="space-between">
          {game.parent_platforms && (
            <PlatformIconList
              platforms={game.parent_platforms.map((pp) => pp.platform)}
            />
          )}
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <RateEmoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
