import { Box, useBreakpointValue, Text, Flex } from "@chakra-ui/react";

interface IIconsResolverProps {
  imgUrl: string;
  text: string;
}
export function IconsResolver({ imgUrl, text }: IIconsResolverProps) {
  const isWideScreem = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Flex
    alignItems="center"
    justifyContent="center"
    mt={6}
    direction={["row", "column"]}
    gap={["2", "6"]}
  >
      {!!isWideScreem ? (
        <Box as="img" width={85} height={85} src={imgUrl}></Box>
      ) : (
        <Box
          as="img"
          width={85}
          height={85}
          w={2}
          h={2}
          src={"images/ball.png"}
        ></Box>
      )}
      <Text>{text}</Text>
    </Flex>
  );
}
