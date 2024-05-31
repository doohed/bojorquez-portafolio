import { useState } from "react";
import styled from "styled-components";
import zenScroll from "zenscroll";

const Container = styled.div`
  z-index: 1;
  left: 20px;
`;

const Link = styled.a`
  margin: 1rem;
  text-transform: uppercase;
`;

const List = styled.div`
`;

const Option = styled.div`
  transition: all 0.3s;
  color: #dbdbcc;
  cursor: url(cursor.svg) 12 12, auto;
  &:hover {
    transform: translate(20px);
    color: gray;
  }
`;

const Item = styled.div`
  text-align: left;
  width: 80px;
  height: 24px;
  overflow: hidden;
  font-weight: 600;
  margin-bottom: 1px;
  cursor: url(cursor.svg) 12 12, auto;
  @media (max-width: 450px) {
    margin-bottom: -2vw;
  }
`;

const Menu = styled.div`
  position: fixed;
  left: 15px;
  top: 15px;
  color: #dbdbcc;
  height: 50px;
  width: 50px;
  background-image: url('/noise.png');
  background-color: #080807;
  transition: all 0.7s;
  opacity: 0;
  background-position: center;
  z-index: 3;
  transform: translate(0%, -120%);
  backdrop-filter: invert(0);
  @media (max-width: 960px) {
    width: 5vh;
    height: 5vh;
  }
`;

const Options = styled.div`
  background-color: #0c0c0c;
  position: fixed;
  width: 30vw;
  height: 98vh;
  top: 4px;
  left: 10px;
  z-index: 2;
  background-image: url("/noise.png");
  background-position: center;
  transform: translate(-120%, 0%);
  @media (max-width: 960px) {
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const work = document.getElementById("work");
  const contact = document.getElementById("contact");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (scrolled > 900) {
      document.getElementById("menu").style.opacity = "1";
      document.getElementById("menu").style.userSelect = "auto";
      document.getElementById("menu").style.transform = "translate(0%)";
    } else {
      document.getElementById("menu").style.transform = "translate(0%,-120%)";
      document.getElementById("menu").style.opacity = "0";
      document.getElementById("menu").style.userSelect = "none";
      document.querySelector("#x").style.opacity = "0";
      document.querySelector("#ham").style.opacity = "1";
      document.getElementById("options").style.transform =
        "translate(-120%, 0%)";
      setIsOpen(false);
    }
  });

  function menu() {
    if (isOpen === true) {
      document.querySelector("#x").style.opacity = "0";
      document.querySelector("#ham").style.opacity = "1";
      document.getElementById("options").style.opacity = "0";
      document.getElementById("options").style.transform =
        "translate(-120%, 0%)";

      setIsOpen(false);
    } else {
      document.querySelector("#ham").style.opacity = "0";
      document.querySelector("#x").style.opacity = "1";
      document.getElementById("options").style.opacity = "1";
      document.getElementById("options").style.transform = "translate(0%, 0%)";
      setIsOpen(true);
    }
  }

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
    <Container className="absolute">
      <List className="inline">
        <Link
          href="https://drive.google.com/file/d/1JNwcDnRUvSEBxPkEnkjKvTvG6Di1nWCs/view?usp=sharing"
          target="_blank"
        >
          <Item onMouseEnter={hover} onMouseLeave={exitHover}>
            <div className="hover:translate-y-[-25px] ease-in-out duration-200">
              <span className="text-left">CV</span>
              <br />
              <span className="text-left">CV</span>
            </div>
          </Item>
        </Link>
        <Link
          href="https://github.com/doohed/bojorquez-portafolio"
          target="_blank"
        >
          <Item onMouseEnter={hover} onMouseLeave={exitHover}>
            <div className="hover:translate-y-[-25px] ease-in-out duration-200">
              <span className="text-left">Source</span>
              <br />
              <span className="text-left">Source</span>
            </div>
          </Item>
        </Link>
        <Link href="#about" onClick={() => zenScroll.to(about)}>
          <Item onMouseEnter={hover} onMouseLeave={exitHover}>
            <div className="hover:translate-y-[-25px] ease-in-out duration-200">
              <span className="text-left">About</span>
              <br />
              <span className="text-left">About</span>
            </div>
          </Item>
        </Link>
        <Link href="#work" onClick={() => zenScroll.to(work)}>
          <Item onMouseEnter={hover} onMouseLeave={exitHover}>
            <div className="hover:translate-y-[-25px] ease-in-out duration-200">
              <span className="text-left">Works</span>
              <br />
              <span className="text-left">Works</span>
            </div>
          </Item>
        </Link>
        <Link onClick={() => zenScroll.toY(4550)}>
          <Item onMouseEnter={hover} onMouseLeave={exitHover}>
            <div className="hover:translate-y-[-25px] ease-in-out duration-200">
              <span className="text-left">Contact</span>
              <br />
              <span className="text-left">Contact</span>
            </div>
          </Item>
        </Link>
      </List>
      <Menu onMouseEnter={hover} onMouseLeave={exitHover} id="menu" className="hide rounded-full" onClick={menu}>
        <svg
          id="ham"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute w-13 h-13 ease-in-out duration-700"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          id="x"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="opacity-0 absolute w-13 h-13 ease-in-out duration-700"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </Menu>
      <Options id="options" className="rounded ease-out duration-700">
        <div className="absolute top-[5vh] text-left p-10 text-white w-[240px] text-[4vw] max-[960px]:text-[7vh]">
          <div onMouseEnter={hover} onMouseLeave={exitHover}>
            <a href="#home" onClick={menu}>
              <Option>Home</Option>
            </a>
          </div>
          <div onMouseEnter={hover} onMouseLeave={exitHover}>
            <a href="#about" onClick={menu}>
              <Option>About</Option>
            </a>
          </div>
          <div onMouseEnter={hover} onMouseLeave={exitHover}>
            <a href="#work" onClick={menu}>
              <Option>Work</Option>
            </a>
          </div>
          <div onMouseEnter={hover} onMouseLeave={exitHover}>
            <a href="#contact" onClick={menu}>
              <Option>Contact</Option>
            </a>
          </div>
          <div onMouseEnter={hover} onMouseLeave={exitHover}>
            <a
              href="https://github.com/doohed/bojorquez-portafolio"
              target="_blank"
              onClick={menu}
            >
              <Option>Source</Option>
            </a>
          </div>
          <div onMouseEnter={hover} onMouseLeave={exitHover}>
            <a
              href="https://drive.google.com/file/d/1JNwcDnRUvSEBxPkEnkjKvTvG6Di1nWCs/view?usp=sharing"
              target="_blank"
              onClick={menu}
            >
              <Option>CV</Option>
            </a>
          </div>
        </div>
      </Options>
    </Container>
  );
};

export default Navbar;
