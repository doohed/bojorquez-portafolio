import styled from "styled-components";

const Container = styled.div`
  z-index: 1;
  left: 20px;
`;

const Link = styled.a`
  cursor: pointer;
  margin: 1rem;
  text-transform: uppercase;
`;

const List = styled.div``;
const Item = styled.div`
  text-align: left;
  width: 75px;
  height: 24px;
  overflow: hidden;
  font-weight: 600;
`;

const Navbar = () => {
  return (
    <Container className="absolute">
      <List className="inline">
        <Link>
          <Item>
            <div className="hover:translate-y-[-25px] ease-in-out duration-200">
              <span className="text-left">Home</span>
              <br />
              <span className="text-left">Home</span>
            </div>
          </Item>
        </Link>
        <Link>
          <Item>
            <div className="hover:translate-y-[-25px] ease-in-out duration-200">
              <span className="text-left">About</span>
              <br />
              <span className="text-left">About</span>
            </div>
          </Item>
        </Link>
        <Link>
          <Item>
            <div className="hover:translate-y-[-25px] ease-in-out duration-200">
              <span className="text-left">Works</span>
              <br />
              <span className="text-left">Works</span>
            </div>
          </Item>
        </Link>
        <Link>
          <Item>
            <div className="hover:translate-y-[-25px] ease-in-out duration-200">
              <span className="text-left">Contact</span>
              <br />
              <span className="text-left">Contact</span>
            </div>
          </Item>
        </Link>
      </List>
    </Container>
  );
};

export default Navbar;
