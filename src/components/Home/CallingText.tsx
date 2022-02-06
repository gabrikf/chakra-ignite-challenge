import { Divider, Flex, Text } from "@chakra-ui/react";

export function CallingText() {
  return (
    <Flex
      gap={["36px", "48px"]}
      align="center"
      direction="column"
      justifyContent="center"
      my={["10", "20"]}
    >
      <Divider
        borderBottomWidth="2px"
        height="5px"
        width="90px"
        size="2px"
        borderBottomColor="#000"
      />
      <Flex
        fontSize="36"
        direction="column"
        gap="10px"
        align="center"
        justify="center"
      >
        <Text fontSize={["20px", "36px"]}>Vamos nessa?</Text>
        <Text fontSize={["20px", "36px"]} textAlign="center">
          Então escolha seu continente
        </Text>
      </Flex>
    </Flex>
  );
}
