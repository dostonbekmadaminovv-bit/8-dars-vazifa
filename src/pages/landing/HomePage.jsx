import HeroSection from "../../components/HeroSection.jsx";
import WhyChooseSection from "../../components/WhyChooseSection.jsx";
import LatestPost from "../../components/LatestPost.jsx";
function HomePage() {
  return (
    <div className="px-4">
      <HeroSection />
      <WhyChooseSection />
      <LatestPost />
    </div>
  );
}

export default HomePage;
