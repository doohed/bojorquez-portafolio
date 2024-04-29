import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section = styled.div``;

const Container = styled.div`
  overflow: hidden;
  color: white;
  background-color: black;
`;

const Square = styled.div`
  position: absolute;
  background-color: black;
  height: 80vh;
  width: 100%;
  top: 0px;
  z-index: -1;
`;

const Card = styled.div``;

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <Section className="relative">
      <Square />
      <Container data-aos="fade">
        <div className="mt-[200px] w-[90vw] ml-[4vw]">
          <div className="border-b-2 border-gray-700">
            <h1
              data-aos="fade-right"
              className="text-9xl text-left m-5 mb-[70px] font-['Open_Sans']"
            >
              / WORKS
            </h1>
            <h2 data-aos="fade-left" className="text-4xl text-right m-5">
              Featured projects that have been meticulously crafted with
              passion and purpose.
            </h2>
          </div>
          <div className="overflow-hidden border-b-2 border-gray-700">
           <Card>
            
           </Card>
           <h2 data-aos="fade-left" className="text-4xl text-right m-5">
              Featured projects that have been meticulously crafted with
              passion and purpose.
            </h2>
          </div>
     
        </div>
      </Container>
    </Section>
  );
};

export default Works;
