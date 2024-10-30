import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return (
    <div>
      <TopHeader />
      <Header />
      <HeroSection
        title="LET'S GET TO WORK"
        subtitle="Expertised In All In One Technical Services"
        buttonText1="Get A Quote"
        buttonText2="Learn More"
      />
    </div>
  );
}
