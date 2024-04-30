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

  return (
    <div className="h-[10vh]">
      <a onMouseEnter={hover} onMouseLeave={exitHover} href="#home">
        <h1 className="cursor-none text-4xl m-0 hover:text-[gray] ease-in-out duration-300 max-[960px]:text-[5vw]">
          © 2024 BOJORQUEZ.DEV
        </h1>
      </a>
    </div>
  );
};

export default Footer;
