import styled from "styled-components";

const Footer = () => {
  function hover() {
    document.getElementById("cursor").style.backdropFilter = "invert(0)";
    document.getElementById("cursor").style.border = "1px solid white";
    document.getElementById("cursor").style.height = "50px";
    document.getElementById("cursor").style.width = "50px";
  }

  function exitHover() {
    document.getElementById("cursor").style.backdropFilter = "invert(1)";
    document.getElementById("cursor").style.border = "0px solid white";
    document.getElementById("cursor").style.height = "32px";
    document.getElementById("cursor").style.width = "32px";
  }

  const Link = styled.a `
    cursor: url(cursor.svg) 12 12, auto;
  `;

  return (
    <div className="h-[5vh]">
      <a>
        <h1 className="text-left text-2xl ml-[2.5vw] max-[960px]:text-1xl">
          © 2024 BOJORQUEZ.DEV
        </h1>
      </a>
    </div>
  );
};

export default Footer;
