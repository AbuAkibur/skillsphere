import HeroSection from "@/components/HeroSection";
import PopularCourses from "@/components/PopularCourses";
import ELearningSection from "@/components/ELearningSection";
import TipsSection from "@/components/TipsSection";
import InstructorsSection from "@/components/InstructorsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularCourses />
      <ELearningSection />
      <TipsSection />
      <InstructorsSection />
    </>
  );
}
