import { BannerContaier } from "../components/Continents/BannerContainer";
import { CardsContent } from "../components/Continents/CardContents";
import { InfoContainer } from "../components/Continents/InfoContainer";
import { Header } from "../components/Home/Header";

export default function Continents() {
  return (
    <>
      <Header />
      <BannerContaier />
      <InfoContainer />
      <CardsContent />
    </>
  );
}
