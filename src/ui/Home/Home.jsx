import { Footer } from "../Footer";
import { BigSummerEvent } from "./BigSummerEvent";
import { UsefulPetKnowledge } from "./UsefulPetKnowledge";
import { Banner2 } from "./Banner2";
import { PetSellers } from "./PetSellers";
import { OurProducts } from "./OurProducts";
import { Banner1 } from "./Banner1";
import { HomePets } from "./HomePets";
import { HeaderDiv } from "./HeaderDiv";

function Home() {
  return (
    <div className="bg-[#FDFDFD]">
      <HeaderDiv />
      <HomePets />
      <Banner1 />
      <OurProducts />
      <PetSellers />
      <Banner2 />
      <UsefulPetKnowledge />
      <BigSummerEvent />
      <Footer />
    </div>
  );
}

export default Home;
