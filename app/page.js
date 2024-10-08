import Image from "next/image";
import HeroImg from "./components/HeroImg";
import SubHero from "./components/SubHero";
import Services from "./components/Services";
import SubFooter from "./components/SubFooter";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="">
      <HeroImg/>
      <SubHero/>
      <Services/>
      <SubFooter/>
      <Footer/>
    </div>
  );
}
