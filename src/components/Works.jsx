import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section = styled.div``;

const Container = styled.div`
  overflow: hidden;
  color: #bfbfb1;
  background-color: black;
  background-image: url('/noise.png');
`;

const Card = styled.div`
  width: 60vw;
  height: 40rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1200px) {
    height: 30rem;
  }
  @media (max-width: 960px) {
    height: 20rem;
    width: 102%;
  }
`;

const Button = styled.button`
  border: 1px solid #bfbfb1;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: #bfbfb1;
    color: black;
  }
`;

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <Section id="work" className="relative">
      <Container>
        <div className=" w-[90vw] ml-[4vw]">
          <div>
            <h1
              data-aos="fade-right"
              className="text-9xl text-left m-5 mb-[70px] font-['Open_Sans'] max-[960px]:text-[19vw]"
            >
              / WORKS
            </h1>
            <h2 data-aos="fade-left" className="text-4xl text-right m-5 max-[960px]:w-[auto]">
              Featured projects that have been meticulously crafted with passion
              and purpose.
            </h2>
          </div>
          <div data-aos="fade" className="mt-[10vmin] flex overflow-hidden max-[960px]:inline">
            <Card
              data-aos="fade-right"
              className="bg-[url('https://images.unsplash.com/photo-1654448189789-b823e1794844?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative rounded-3xl"
            >
              <video
                className="w-[40vw] rounded-lg absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-[960px]:w-[60vw] max-[700px]:w-[80vw]"
                autoPlay
                muted
                loop
              >
                <source src="/p1.mp4" type="video/mp4" />
              </video>
            </Card>
            <div>
              <h2
                data-aos="fade-left"
                className="text-lg text-left ml-5 w-[35vw] max-[960px]:w-[auto]"
              >
                Minimalist weather web app with react and openweather api.
              </h2>
              <h1 data-aos="fade-left" className="text-4xl text-left m-5">
                Weather.app
              </h1>
              <div data-aos="fade-left" className="text-left m-3">
                <a href="https://weather-app-eosin-omega.vercel.app/" target="_blank"><Button>Live Demo</Button></a>
                <a href="https://github.com/doohed/weather-app" target="_blank"><Button>Source</Button></a>
              </div>
            </div>
          </div>
          <div data-aos="fade" className="mt-[10vmin] flex overflow-hidden max-[960px]:inline">
            <Card
              data-aos=" fade-right"
              className="bg-[url('https://images.unsplash.com/photo-1630389715052-983a8e31faa6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative rounded-3xl"
            >
              <video
                className="w-[40vw] rounded-lg absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-[960px]:w-[50vw] max-[700px]:w-[70vw]"
                autoPlay
                muted
                loop
              >
                <source src="/p2.mp4" type="video/mp4" />
              </video>
            </Card>
            <div>
              <h2
                data-aos="fade-left"
                className="text-lg text-left ml-5 w-[35vw] max-[960px]:w-[auto]"
              >
                Small art gallery portfolio with some eye catching animations.
              </h2>
              <h1 data-aos="fade-left" className="text-4xl text-left m-5">
                Art-gallery
              </h1>
              <div data-aos="fade-left" className="text-left m-3">
              <a href="https://art-gallery-inky.vercel.app/" target="_blank"><Button>Live Demo</Button></a>
                <a href="https://github.com/doohed/art-gallery" target="_blank"><Button>Source</Button></a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade"
            className="mt-[10vmin] mb-[10vmin] flex overflow-hidden max-[960px]:inline"
          >
            <Card
              data-aos=" fade-right"
              className="bg-[url('https://images.unsplash.com/photo-1614617021766-d00d5d28b1ab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative rounded-3xl"
            >
              <video
                className="w-[40vw] rounded-lg absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-[960px]:w-[50vw] max-[700px]:w-[70vw]"
                autoPlay
                muted
                loop
              >
                <source src="/p3.mp4" type="video/mp4" />
              </video>
            </Card>
            <div>
              <h2
                data-aos="fade-left"
                className="text-lg text-left ml-5 w-[35vw] max-[960px]:w-[auto]"
              >
                Minimalist and modern ecommerce web page.
              </h2>
              <h1 data-aos="fade-left" className="text-4xl text-left m-5">
                Essentia
              </h1>
              <div data-aos="fade-left" className="text-left m-3">
              <a href="http://essentia-eight.vercel.app" target="_blank"><Button>Live Demo</Button></a>
                <a href="https://github.com/doohed/essentia" target="_blank"><Button>Source</Button></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Works;
