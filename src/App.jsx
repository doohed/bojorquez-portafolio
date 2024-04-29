import styled from "styled-components";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Footer from "./components/Footer";

const Container = styled.div`
`

function App() {
  return (
    <Container>
      <Navbar/>
      <Hero />
      <About />
      <Works/>
      <Contact/>
      <Footer/>
    </Container>
  );
}

export default App;
