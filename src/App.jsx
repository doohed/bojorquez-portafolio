import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Works/>
    </div>
  );
}

export default App;
