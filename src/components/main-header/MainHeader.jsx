import styled from "styled-components";
import Navigation from "./Navigation";

// eslint-disable-next-line react/prop-types
const MainHeader = () => {
  // props drilling
  return (
    <Header>
      <h1>A Typical Page</h1>
      <Navigation />
    </Header>
  );
};

export default MainHeader;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #741188;
  padding: 0 2rem;
  h1 {
    color: white;
  }
`;
