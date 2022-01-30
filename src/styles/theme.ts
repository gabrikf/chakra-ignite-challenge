import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "400": "#FFBA08",
    },
    gray: {
      "50": "#F5F8FA",
      "200": "#DADADA",
      "500": "#47585B",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "gray.500",
      },
    },
  },
});
