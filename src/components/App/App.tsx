import * as React from "react";
import styled from "styled-components";
import StatsPreviewCard from "../StatsPreviewCard";

const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  background: var(--veryDarkBlue);
  display: grid;
  place-items: center;
  padding-left: 24px;
  padding-right: 24px;
  @media (max-width: ${({ theme }) => theme.layout.breakpoint.mobile}) {
    margin: 0;
    padding: 0 12px;
  }
`;

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <Wrapper data-testid="app">
      <StatsPreviewCard view={width > 768 ? "desktop" : "mobile"} />
    </Wrapper>
  );
}

export default App;
