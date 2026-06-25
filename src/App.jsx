import Navbar from "./components/Navbar";
import HeroLeft from "./components/HeroLeft";
import ReadmeSection from "./components/ReadmeSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="flex pt-[44px] hero-layout">
        <HeroLeft />
        <ReadmeSection />
      </div>
    </div>
  );
}

export default App;