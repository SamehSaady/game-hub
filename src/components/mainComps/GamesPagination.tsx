import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import arrUtils from "../../utils/arrUtils";
import {
  getHighlightBGColor,
  getHighlightFontWeight,
} from "../../services/highlight-button-service";
import { globalPadding } from "../../App";

interface Props {
  maxButtonsCount: number; // The max number of buttons to be rendered (better to be an odd number).
  gamesCount: number; // Total num of games retrieved from API response.
  numOfGamesPerPage: number; // The num of games to be rendered for a single page.
  selectedPageNum: number;
  onSelectPageNum: (selectedPageNum: number) => void;
  colorMode: string;
}

const getPaginationItems = (
  maxButtonsCount: number,
  pagesCount: number,
  selectedPageNum: number,
  onSelectPageNum: (selectedPageNum: number) => void,
  colorMode: string
) => {
  const createRangeText = (key: number) => {
    return (
      <Text key={key} paddingX={2}>
        ...
      </Text>
    );
  };

  const createButton = (pageNum: number) => {
    const highlight = pageNum === selectedPageNum;
    return (
      <Button
        key={pageNum}
        // width="32px"
        bgColor={getHighlightBGColor(highlight, colorMode)}
        fontWeight={getHighlightFontWeight(highlight)}
        onClick={() => onSelectPageNum(pageNum)}
      >
        <a href="#">{pageNum}</a>
      </Button>
    );
  };

  const buildRangeText1 =
    maxButtonsCount >= 5 &&
    pagesCount > maxButtonsCount &&
    selectedPageNum >= 4;

  const buildRangeText2 =
    maxButtonsCount >= 5 &&
    pagesCount > maxButtonsCount &&
    selectedPageNum < pagesCount - 3;

  let middleButtonsFrom;
  let middleButtonsTo;

  if (!buildRangeText1 && !buildRangeText2) {
    middleButtonsFrom = 2;
    middleButtonsTo = pagesCount - 1;
  } else if (buildRangeText1 && buildRangeText2) {
    // If the [maxButtonsCount] is even, the total number of buttons will be odd ([maxButtonsCount] + 1).
    middleButtonsFrom = selectedPageNum - Math.floor((maxButtonsCount - 2) / 2);
    middleButtonsTo = selectedPageNum + Math.floor((maxButtonsCount - 2) / 2);
  } else if (!buildRangeText1) {
    middleButtonsFrom = 2;
    middleButtonsTo = maxButtonsCount - 1;
  } else {
    // buildRangeText2 only:
    middleButtonsFrom = pagesCount - maxButtonsCount + 2;
    middleButtonsTo = pagesCount - 1;
  }

  const elements = [
    createButton(1),
    arrUtils
      .getRange(middleButtonsFrom, middleButtonsTo)
      .map((pageNum) => createButton(pageNum)),
    createButton(pagesCount),
  ];

  if (buildRangeText1)
    arrUtils.insertAt(elements, 1, createRangeText(pagesCount + 1));

  if (buildRangeText2)
    arrUtils.insertAt(elements, -1, createRangeText(pagesCount + 2));

  return elements;
};

const GamesPagination = ({
  maxButtonsCount,
  gamesCount,
  numOfGamesPerPage,
  selectedPageNum,
  onSelectPageNum,
  colorMode,
}: Props) => {
  // const pagesCount = Math.ceil(gamesCount / numOfGamesPerPage / 50);
  let pagesCount = Math.ceil(gamesCount / numOfGamesPerPage);
  const limit = 500;
  pagesCount = pagesCount > limit ? limit : pagesCount;

  if (pagesCount <= 1) return [];

  const paginationItems = getPaginationItems(
    maxButtonsCount,
    pagesCount,
    selectedPageNum,
    onSelectPageNum,
    colorMode
  );

  return (
    <Box justifyContent="center" display="flex" paddingBottom={globalPadding}>
      <ButtonGroup variant="outline" size="sm" spacing={1.5}>
        {paginationItems}
      </ButtonGroup>
    </Box>
  );
};

export default GamesPagination;
