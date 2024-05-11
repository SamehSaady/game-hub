import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,  // Default
};

const theme = extendTheme({config});

export default theme;