import styled from "styled-components";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const Container = styled.div`
  cursor: url(cursor.svg) 12 12, auto;
`;

const Cursor = styled.div`
  background-color: #1111111c;
  backdrop-filter: invert(1);
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: fixed;
  top: 0px;
  left: 0px;
  user-select: none;
  pointer-events: none;
  z-index: 5;
  @media (max-width: 900px) {
    display: none;
  }
`;

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  function moveHandler() {
    document.getElementById("cursor").style.transform = `
    translate(${
      mousePosition.x - document.getElementById("cursor").clientWidth / 2
    }px, 
      ${
        mousePosition.y - document.getElementById("cursor").clientHeight / 2
      }px)`;
      document.getElementById("cursor").style.opacity = "1";
  }

  return (
    <Container onMouseMove={moveHandler}>
      <Cursor id="cursor" className="ease-out duration-500" />
      <Navbar />
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
