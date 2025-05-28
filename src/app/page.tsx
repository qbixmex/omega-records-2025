import PublicLayout from "./(public)/public.layout";
import Hero from "./components/home/hero/hero.component";
import Services from "./components/home/services/services.component";
import Features from "./components/home/features/features.component";

const HomePage = () => {
  return (
    <PublicLayout>
      <Hero />
      <Services />
      <Features />
    </PublicLayout>
  );
};

export default HomePage;
