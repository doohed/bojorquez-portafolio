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

const Card = styled.div`
  width: 60vw;
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 80vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <Section className="relative">
      <Square />
      <Container data-aos="fade">
        <div className="mt-[200px] w-[90vw] ml-[4vw]">
          <div>
            <h1
              data-aos="fade-right"
              className="text-9xl text-left m-5 mb-[70px] font-['Open_Sans']"
            >
              / WORKS
            </h1>
            <h2 data-aos="fade-left" className="text-4xl text-right m-5">
              Featured projects that have been meticulously crafted with passion
              and purpose.
            </h2>
          </div>
          <div className="mt-[10vmin] flex overflow-hidden ">
            <Card
              data-aos="fade-right"
              className="bg-[url('https://images.unsplash.com/photo-1654448189789-b823e1794844?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative rounded-3xl"
            >
              <video
                className="w-[40vw] rounded-lg absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
                autoPlay
                muted
                loop
              >
                <source src="/p1.mp4" type="video/mp4" />
              </video>
            </Card>
            <h2 data-aos="fade-left" className="text-lg text-left ml-5 w-[40vw]">
              Minimalist weather web app with react and openweather api.
            </h2>
          </div>
          <div className="mt-[10vmin] flex overflow-hidden">
            <Card
              data-aos=" fade-right"
              className="bg-[url('https://images.unsplash.com/photo-1630389715052-983a8e31faa6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative rounded-3xl"
            >
              <video
                className="w-[40vw] rounded-lg absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
                autoPlay
                muted
                loop
              >
                <source src="/p2.mp4" type="video/mp4" />
              </video>
            </Card>
            <h2 data-aos="fade-left" className="text-lg text-left ml-5 w-[40vw]">
              Small art gallery portfolio with some eye catching animations.
            </h2>
          </div>
          <div className="mt-[10vmin] flex overflow-hidden">
            <Card
              data-aos=" fade-right"
              className="bg-[url('https://images.unsplash.com/photo-1614617021766-d00d5d28b1ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative rounded-3xl"
            >
              <video
                className="w-[40vw] rounded-lg absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
                autoPlay
                muted
                loop
              >
                <source src="/p3.mp4" type="video/mp4" />
              </video>
            </Card>
            <h2 data-aos="fade-left" className="text-lg text-left ml-5 w-[40vw]">
              Minimalist and modern ecommerce web page
            </h2>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Works;
