import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section = styled.div`

`;

const Container = styled.div`
  overflow: hidden;
  color: #BFBFB1;
`;

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <Section>
      <Container>
        <div id="about" data-aos="fade" data-aos-anchor-placement="top-center" className=" mt-[20vh] bg-black bg-[url('/noise.png')]">
          <div className="w-[90vw] ml-[4vw]">
            <div className="border-b-2 border-gray-700">
              <h1
                data-aos="fade-right"
                className="text-9xl text-left m-0 mb-[90px] font-['Open_Sans']"
              >
                /ABOUT
              </h1>
              <h2 data-aos="fade-left" className="text-4xl text-right m-5">
                Based in Mexico with a passion for building digital services
              </h2>
            </div>
            <div className="overflow-hidden border-b-2 border-gray-700">
              <h1
                data-aos="fade-right"
                className="text-6xl text-left m-5 mb-[70px]"
              >
                Web Development
              </h1>
              <h2
                data-aos="fade-up"
                className="text-2xl text-left m-5 w-[50vw]"
              >
                I create unique, custom-coded websites that are tailored to your
                brand. I focus on scalability, performance, accessibility, and
                engaging animations for a memorable experience.
              </h2>
            </div>
            <div className="overflow-hidden">
              <h1
                data-aos="fade-right"
                className="text-6xl text-left m-5 mb-[70px]"
              >
                Skills
              </h1>
              <h2 data-aos="fade-left" className="text-4xl text-right m-5">
                Javascript <span data-aos="fade-left" >•</span>
              </h2>
              <h2 data-aos="fade-left" className="text-4xl text-right m-5">
                Html <span data-aos="fade-left">•</span>
              </h2>
              <h2 data-aos="fade-left" className="text-4xl text-right m-5">
                CSS<span data-aos="fade-left">•</span>
              </h2>
              <h2 data-aos="fade-left" className="text-4xl text-right m-5">
                Tailwind <span data-aos="fade-left">•</span>
              </h2>
              <h2 data-aos="fade-left" className="text-4xl text-right m-5">
                styledcomponents <span data-aos="fade-left">•</span>
              </h2>
              <h2 data-aos="fade-left" className="text-4xl text-right m-5">
                Vite + React <span data-aos="fade-left" >•</span>
              </h2>
              <h2 data-aos="fade-left" className="text-4xl text-right m-5">
                React.js <span data-aos="fade-left">•</span>
              </h2>
              <h2 data-aos="fade-left" className="text-4xl text-right m-5">
                Next.js <span data-aos="fade-left">•</span>
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
