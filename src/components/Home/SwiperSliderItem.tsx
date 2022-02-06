import {
  Box,
  Flex,
  Text,
  Link as ChakraLink,
  LinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

interface ISwiperSliderProps extends LinkProps {
  imgUrl: string;
  title: string;
  subtitle: string;
  href: string;
}

export function SwiperSliderItem({
  imgUrl,
  title,
  subtitle,
  href,
  ...rest
}: ISwiperSliderProps) {
  return (
    <Link passHref href={href}>
      <ChakraLink {...rest}>
        <Box
          height={["163px", "335px"]}
          backgroundImage={`url(${imgUrl})`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
        >
          <Flex
            h="100%"
            align="center"
            justifyContent="center"
            direction="column"
            position="relative"
            filter="none"
          >
            <Text fontWeight="bold" color="#FFF" fontSize={["24px", "48px"]}>
              {title}
            </Text>
            <Text color="#FFF" fontWeight="bold" fontSize={["14px", "24px"]}>
              {subtitle}
            </Text>
          </Flex>
        </Box>
      </ChakraLink>
    </Link>
  );
}
