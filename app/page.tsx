import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Sleek from "@/components/Sleek";
import Why from "@/components/Why";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection
        title="LET ' S GET TO WORK"
        buttonText1="Get A Quote"
        buttonText2="Learn More"
      />
      <About/>
      <Services/>
      <Why/>
      <Projects/>
      <Faq/>
      <Sleek/>
      <Reviews/>
      <Footer/>
    </div>
  );
}
