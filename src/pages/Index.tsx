
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import SkillsCertifications from "@/components/SkillsCertifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <SkillsCertifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
