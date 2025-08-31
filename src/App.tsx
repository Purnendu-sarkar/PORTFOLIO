import Navbar from "./components/layout/Navbar";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      {/* Other components and routes would go here */}
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
