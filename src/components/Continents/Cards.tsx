import { Avatar, Box, Flex, Text, VStack } from "@chakra-ui/react";

interface ICardProps {
  imgUrl: string;
  title: string;
  subTitle: string;
  flagUrl: string;
}

export function Card({ imgUrl, title, subTitle, flagUrl }: ICardProps) {
  return (
    <Flex direction="column">
      <Box flex={2} as="img" src={imgUrl} />
      <Box flex={1}>
        <Flex
          borderWidth={1}
          borderColor="yellow.300"
          borderBottomRadius={5}
          borderTop="0"
          justify="space-between"
          align="center"
          p="5"
        >
          <VStack fontFamily="Barlow" align="start" justify="start">
            <Text fontWeight="semibold" fontSize={["20px"]}>
              {title}
            </Text>
            <Text fontWeight="medium" color="gray.400" fontSize={["16px"]}>
              {subTitle}
            </Text>
          </VStack>
          <Avatar size="xs" src={flagUrl} />
        </Flex>
      </Box>
    </Flex>
  );
}
