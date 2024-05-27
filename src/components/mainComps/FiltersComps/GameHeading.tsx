import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Heading Syntax: [{Platform} {Genre} Games]
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h2" paddingY={5} fontSize="3xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
