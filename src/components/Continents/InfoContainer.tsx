import {
  Box,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { GrCircleInformation } from "react-icons/gr";

export function InfoContainer() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Stack
      spacing={10}
      direction={["column", "row"]}
      mt="16"
      px="10"
      maxW="1200px"
      mx="auto"
    >
      <Text fontSize={["14px", "24px"]} flex="1">
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <HStack justify="center" flex="1">
        <VStack flex="1">
          <Text
            color="yellow.400"
            fontWeight="semibold"
            fontSize={["24", "48"]}
          >
            50
          </Text>
          <Text fontSize={["18px", "24px"]}>países</Text>
        </VStack>
        <VStack flex="1">
          <Text
            color="yellow.400"
            fontWeight="semibold"
            fontSize={["24", "48"]}
          >
            60
          </Text>
          <Text fontSize={["18px", "24px"]}>línguas</Text>
        </VStack>
        <VStack flex="1">
          <Text
            color="yellow.400"
            fontWeight="semibold"
            fontSize={["24", "48"]}
          >
            27
          </Text>

          <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
            <Flex>
              <Text fontSize={["18px", "24px"]} whiteSpace="nowrap">
                cidades +100
              </Text>
              {!!isWideVersion && <Icon w={3} h={3} as={GrCircleInformation} />}
            </Flex>
          </Tooltip>
        </VStack>
      </HStack>
    </Stack>
  );
}
