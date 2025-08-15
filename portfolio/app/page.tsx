import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
