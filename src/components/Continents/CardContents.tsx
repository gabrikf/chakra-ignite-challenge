import { Box, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import { Card } from "./Cards";

export function CardsContent() {
  return (
    <Box mt={24} px="10" maxW="1200px" mx="auto">
      <Text fontWeight="medium" mb={12} fontSize={[24, 36]}>
        Cidades +100
      </Text>
      <Grid gridTemplateColumns={["1fr", "repeat(4,1fr)"]} gap={8}>
        <Card
          title="Londres"
          subTitle="Reino Unído"
          imgUrl="images/cities/londres.png"
          flagUrl="images/flags/englandFlag.png"
        />
        <Card
          title="París"
          subTitle="França"
          imgUrl="images/cities/paris.png"
          flagUrl="images/flags/franceFlag.png"
        />
        <Card
          title="Roma"
          subTitle="Itália"
          imgUrl="images/cities/roma.png"
          flagUrl="images/flags/italyFlag.png"
        />
        <Card
          title="Praga"
          subTitle="República Tcheca"
          imgUrl="images/cities/praga.png"
          flagUrl="images/flags/republicFlag.png"
        />
        <Card
          title="Amsterdã"
          subTitle="Holanda"
          imgUrl="images/cities/amsterda.png"
          flagUrl="images/flags/netherlandsFlag.png"
        />
      </Grid>
    </Box>
  );
}
