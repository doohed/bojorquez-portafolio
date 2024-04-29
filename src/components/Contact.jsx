import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section = styled.div`
  
`;

const Container = styled.div`
  overflow: hidden;
  height: 120vh;
`;

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <Section id="contact">
      <Container>CONTACT</Container>
    </Section>
  );
};

export default Contact;
