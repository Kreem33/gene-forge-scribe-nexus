
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Discover from "@/components/Discover";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Discover />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
