import styled from "styled-components";

const Container = styled.div`
  z-index: 1;
  
`;

const Link = styled.a`
  cursor: pointer;
  margin: 1rem;
  text-transform: uppercase;
`;

const List = styled.div`
`;
const Item = styled.div`
text-align: left;
`;

const Navbar = () => {
  return (
    <Container className="absolute">
      <List className="inline">
        <Link><Item><span className="text-left">Home</span></Item></Link>
        <Link><Item>About</Item></Link>
        <Link><Item>Works</Item></Link>
        <Link><Item>Contact</Item></Link>      
      </List>
    </Container>
  );
};

export default Navbar;
