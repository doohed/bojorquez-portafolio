import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Section = styled.div``;

const Container = styled.div`
  overflow: hidden;
  height: 60vh;
  width: 90vw;
  margin-left: 4vw;
`;

const Link = styled.a`
  margin: 1rem;
  text-transform: uppercase;
  cursor: none;
`;

const List = styled.div``;

const Item = styled.div`
  text-align: left;
  width: 110px;
  height: 24px;
  overflow: hidden;
  font-weight: 600;
`;

const Button = styled.button`
  border: 1px solid #080807;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  transition: all 0.5s ease-out;
  cursor: none;
  &:hover {
    background-color: #080807;
    color: #dbdbcc;
  }
`;

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const email = "bojorquezdev@gmail.com";

  const onCopyHandler = () => {
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2500);
  };

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  function hover () {
    document.getElementById("cursor").style.backdropFilter= 'invert(0)';
    document.getElementById("cursor").style.border= '1px solid white';
    document.getElementById("cursor").style.height= '50px';
    document.getElementById("cursor").style.width= '50px';
  }

  function exitHover() {
    document.getElementById("cursor").style.backdropFilter= 'invert(1)';
    document.getElementById("cursor").style.border= '0px solid white';
    document.getElementById("cursor").style.height= '32px'; 
    document.getElementById("cursor").style.width= '32px';
  }

  return (
    <Section id="contact">
      <Container>
        <h1
          data-aos="fade-right"
          className="text-9xl text-left m-0 mb-[90px] font-['Open_Sans'] max-[960px]:text-[18vw]"
        >
          /CONTACT
        </h1>
        <div className="w-[80px]">
          <List className="inline">
            <Link
              onMouseEnter={hover}
              onMouseLeave={exitHover}
              data-aos="fade-right"
              href="https://github.com/doohed/"
              target="_blank"
            >
              <Item>
                <div className="hover:translate-y-[-25px] ease-in-out duration-200">
                  <span className="text-left">Github</span>
                  <br />
                  <span className="text-left">Github</span>
                </div>
              </Item>
            </Link>
            <Link
              onMouseEnter={hover}
              onMouseLeave={exitHover}
              data-aos="fade-right"
              href="https://www.linkedin.com/in/bojorquez-godina-martin-esteban-908609270/"
              target="_blank"
            >
              <Item>
                <div className="hover:translate-y-[-25px] ease-in-out duration-200">
                  <span className="text-left">Linkedin</span>
                  <br />
                  <span className="text-left">Linkedin</span>
                </div>
              </Item>
            </Link>
            <Link
              onMouseEnter={hover}
              onMouseLeave={exitHover}
              data-aos="fade-right"
              href="https://www.instagram.com/dohed_/"
              target="_blank"
            >
              <Item>
                <div className="hover:translate-y-[-25px] ease-in-out duration-200">
                  <span className="text-left">Instagram</span>
                  <br />
                  <span className="text-left">Instagram</span>
                </div>
              </Item>
            </Link>
          </List>
        </div>
        <div className="text-left ml-[-10px]">
          <Button
            onMouseEnter={hover}
            onMouseLeave={exitHover}
            className="email"
            onClick={() => {
              navigator.clipboard.writeText(email);
              onCopyHandler();
            }}
          >
            bojorquezdev@gmail.com
          </Button>
        </div>
        {isCopied && (
          <div data-aos="fade-right" className="text-left">
            Copied to clipboard!
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Contact;
