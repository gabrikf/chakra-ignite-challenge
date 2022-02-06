import { Box } from "@chakra-ui/react";
import { Header } from "../components/Home/Header";

import { BannerContaier } from "../components/Home/BannerContainer";
import { Icons } from "../components/Home/Icons";
import { CallingText } from "../components/Home/CallingText";
import { Slider } from "../components/Home/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <BannerContaier />
      <Icons />
      <CallingText />
      <Box w={["100%", "90%"]} m="auto" mb={24}>
        <Slider />
      </Box>
    </>
  );
}
