import { Box, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

export function BannerContaier() {
  return (
    <Box
      height={["150px", "500px"]}
      backgroundImage={`url(images/banner/europe.png)`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        pl={["0", "140px"]}
        pb={["0", "59px"]}
        justifyContent={["center", "start"]}
        height="100%"
        align={["center", "end"]}
        position="relative"
      >
        <Box>
          <Text
            fontWeight="semibold"
            color="gray.50"
            fontSize={["28px", "48px"]}
          >
            Europa
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
