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
width: 25vw;
user-select: none;
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Top>
          <div
            className="
          absolute left-[50%] 
          translate-x-[-50%] 
          top-[50%] 
          translate-y-[-50%]"
          >
            <Title className="animate-[titleIn_.7s_ease-in-out]">
              MARTIN BOJORQUEZ
            </Title>
            <Title className="animate-[titleIn_1s_ease-in-out] text-white">
              MARTIN BOJORQUEZ
            </Title>
            <Title className="animate-[titleIn_1.5s_ease-in-out]">
              MARTIN BOJORQUEZ
            </Title>
          </div>
          <Message className="absolute left-[50%] 
          translate-x-[-50%] 
          bottom-[0vh]
          ">
            <p className="animate-bounce"> SCROLL DOWN</p>
          </Message>
        </Top>
      </Container>
    </Section>
  );
};

export default Hero;
