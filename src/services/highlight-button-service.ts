// Contains methods for highlited Buttons.

// Background Highlight colors (used with Buttons) for dark and light themes.
const bgHighlightColor = { dark: "#252525", light: "#ededed" };

// Retrieves the background color to be assigned to the highlighted [Button.bgColor].
export const getHighlightBGColor = (
  highlight: boolean,
  colorMode: string // Can be either "dark" or "light".
) => {
  return highlight
    ? colorMode === "dark"
      ? bgHighlightColor.dark
      : bgHighlightColor.light
    : "";
};

// Retrieves the font weight to be assigned to the highlighted [Button.fontWeight].
export const getHighlightFontWeight = (highlight: boolean) => {
  return highlight ? "bold" : "normal";
};
