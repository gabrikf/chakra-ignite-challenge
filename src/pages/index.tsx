import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import bg from "../../public/images/Banner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";

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
      <Grid
        mx="6"
        mt={["4", "28"]}
        justifyContent="center"
        alignItems="center"
        templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          mt={6}
          direction={["row", "column"]}
          gap={["2", "6"]}
        >
          {!!isWideScreem ? (
            <Box
              as="img"
              width={85}
              height={85}
              src={"images/types/night.png"}
            ></Box>
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
          <Text>Vida noturna</Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          mt={6}
          direction={["row", "column"]}
          gap={["2", "6"]}
        >
          {!!isWideScreem ? (
            <Box
              as="img"
              width={85}
              height={85}
              src={"images/types/surf.png"}
            ></Box>
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
          <Text>Praia</Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          mt={6}
          direction={["row", "column"]}
          gap={["2", "6"]}
        >
          {!!isWideScreem ? (
            <Box
              as="img"
              width={85}
              height={85}
              src={"images/types/build.png"}
            ></Box>
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
          <Text>Moderno</Text>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="center"
          mt={6}
          direction={["row", "column"]}
          gap={["2", "6"]}
          colSpan={4}
        >
          {!!isWideScreem ? (
            <Box
              as="img"
              width={85}
              height={85}
              src={"images/types/classic.png"}
            ></Box>
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
          <Text>Clássico</Text>
        </Flex>
        <GridItem alignItems="center" justifyContent="center" colSpan={[2, 1]}>
          <Flex
            alignItems="center"
            justifyContent="center"
            mt={6}
            direction={["row", "column"]}
            gap={["2", "6"]}
          >
            {!!isWideScreem ? (
              <Box
                as="img"
                width={85}
                height={85}
                src={"images/types/world.png"}
              ></Box>
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
            <Text>E mais...</Text>
          </Flex>
        </GridItem>
      </Grid>
      <Box w={["100%", "90%"]} m="auto" mb={32}>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Box
              height={["163px", "335px"]}
              backgroundImage={`url(images/banner/Background.png)`}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              filter="brightness(70%)"
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
                      Chegou a hora de tirar do papel a viagem que você sempre
                      sonhou.{" "}
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
          </SwiperSlide>
          <SwiperSlide>
            {" "}
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
                      Chegou a hora de tirar do papel a viagem que você sempre
                      sonhou.{" "}
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
          </SwiperSlide>
          <SwiperSlide>
            {" "}
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
                      Chegou a hora de tirar do papel a viagem que você sempre
                      sonhou.{" "}
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
          </SwiperSlide>
          <SwiperSlide>
            {" "}
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
                      Chegou a hora de tirar do papel a viagem que você sempre
                      sonhou.{" "}
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
          </SwiperSlide>
          <SwiperSlide>
            {" "}
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
                      Chegou a hora de tirar do papel a viagem que você sempre
                      sonhou.{" "}
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
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
