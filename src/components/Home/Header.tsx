import { Box, Flex, Link as ChakraLink, Icon } from "@chakra-ui/react";
import IconBack from "../../public/images/back.svg";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import Link from "next/link";
export function Header({}) {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <Flex
      px="10"
      maxW="1200px"
      mx="auto"
      justifyContent="space-between"
      align="center"
      h={100}
      w="100vw"
    >
      {asPath !== "/" ? (
        <Link passHref href="/">
          <ChakraLink>
            <Icon fontSize={32} as={IoIosArrowBack} />
          </ChakraLink>
        </Link>
      ) : (
        <Box />
      )}

      <Box as="img" src="images/logo.png" />
      <Box />
    </Flex>
  );
}
