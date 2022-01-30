import { Box, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import bg from "../../public/images/Banner.png";

export default function Home() {
  const isWideScreem = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <>
      <Header />
      <Box
        height={["163px", "335px"]}
        backgroundImage={`url(images/banner/Background.png)`}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Flex
          pl={["16px", "140px"]}
          pr={["16px", "0"]}
          justifyContent={["center", "start"]}
          height="100%"
          align="center"
          position="relative"
        >
          <Box>
            <VStack maxWidth={524} spacing={["8px", "24px"]}>
              <Text
                fontWeight="medium"
                color="gray.50"
                fontSize={["20px", "36px"]}
              >
                5 Continentes, infinitas possibilidades.
              </Text>
              <Text
                fontWeight="medium"
                color="gray.200"
                fontSize={["14px", "20px"]}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
              </Text>
            </VStack>
          </Box>
          {!!isWideScreem && (
            <Box
              position="absolute"
              right={140}
              top="20"
              as="img"
              src="images/banner/Airplane.png"
            />
          )}
        </Flex>
      </Box>
    </>
  );
}
