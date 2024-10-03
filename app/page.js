import Image from "next/image";
import HeroImg from "./components/HeroImg";
import SubHero from "./components/SubHero";
import Services from "./components/Services";
export default function Home() {
  return (
    <div className="">
      <HeroImg/>
      <SubHero/>
      <Services/>
    </div>
  );
}
