import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Section = styled.div``;

const Container = styled.div`
  overflow: hidden;
  height: 120vh;
  color: white;
`;

const About = () => {

    useEffect(() => {
        AOS.init({duration:500});
    }, []);

  return (
    <Section>
      <Container>
        <div data-aos="fade" className="h-[100vh] mt-[20vh] bg-black">
          
            <h1 >tlin</h1>
            <h1>tilin 2</h1>
            <h2>sexxx</h2>
          
        </div>
      </Container>
    </Section>
  );
};

export default About;
