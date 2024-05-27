import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// import "bootstrap/dist/css/bootstrap.css";
// When referencing Bootstrap, some text become not aligned vertically (e.g., "All Genres" & "All Platforms")
import App from "./App.tsx";
import "./App.css";
import "./index.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
