import styled from "styled-components";

const Section = styled.div``;

const Container = styled.div`
  overflow: hidden;
`;

const Title = styled.div`
  font-family: "Metropolis";
  font-size: 10vw;
  -webkit-text-stroke: 0.1vw black;
  user-select: none;
  letter-spacing: -1vw;
  width: 100vw;
`;

const Top = styled.div`
  position: relative;
  height: 100vh;
`;

const Message = styled.div`
  user-select: none;
  bottom: 0px;
  @media (max-width: 1060px) {
    bottom: 80px;
  }
`;

const Square = styled.div`
  height: 41vw;
  width: 35vw;
  background-color: black;
  z-index: 1;
  overflow: hidden;
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Top>
          <Square
            className=" animate-[squareIn_2s_ease-in-out]
          relative left-[50%] 
          translate-x-[-50%] 
          top-[50%] 
          translate-y-[-50%]"
          >
            <div
              className="
          absolute left-[50%] 
          translate-x-[-50%] 
          top-[50%] 
          translate-y-[-50%]"
            >
              <Title className="invert animate-[titleIn_.7s_ease-in-out]">
                MARTIN BOJORQUEZ
              </Title>
              <Title className="invert text-white animate-[titleIn_1s_ease-in-out]">
                MARTIN BOJORQUEZ
              </Title>
              <Title className="invert animate-[titleIn_1.5s_ease-in-out]">
                MARTIN BOJORQUEZ
              </Title>
            </div>
          </Square>
          <div
            className="
          absolute left-[50%] 
          translate-x-[-50%] 
          top-[50%] 
          translate-y-[-50%]"
          >
            <Title className=" animate-[titleIn_.7s_ease-in-out]">
              MARTIN BOJORQUEZ
            </Title>
            <Title className="text-white animate-[titleIn_1s_ease-in-out]">
              MARTIN BOJORQUEZ
            </Title>
            <Title className=" animate-[titleIn_1.5s_ease-in-out]">
              MARTIN BOJORQUEZ
            </Title>
          </div>
          <Message
            className="absolute left-[50%] 
          translate-x-[-50%]
          "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </Message>
        </Top>
      </Container>
    </Section>
  );
};

export default Hero;
