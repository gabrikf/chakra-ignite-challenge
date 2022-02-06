import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IconsResolver } from "./IconsResolver";

export function Icons() {
  const isWideScreem = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Grid
      mx="6"
      mt={["4", "28"]}
      justifyContent="center"
      alignItems="center"
      templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
    >
      <IconsResolver text="Vida noturna" imgUrl="images/types/night.png" />
      <IconsResolver text="praia" imgUrl="images/types/surf.png" />
      <IconsResolver text="morderno" imgUrl="images/types/build.png" />
      <IconsResolver text="classico" imgUrl="images/types/classic.png" />
      <GridItem alignItems="center" justifyContent="center" colSpan={[2, 1]}>
        <IconsResolver text="e mais..." imgUrl={"images/types/world.png"} />
      </GridItem>
    </Grid>
  );
}
