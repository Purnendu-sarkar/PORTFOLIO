import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import BlurBlob from "./constants/BlurBlob";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="bg-[#050414] relative" style={{ scrollBehavior: "smooth" }}>
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative z-10">
        <Navbar />
        {/* Other components and routes would go here */}
        <About />
        <Skills />
        <Projects />
        <Education />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
