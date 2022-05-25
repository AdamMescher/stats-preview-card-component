import styled from "styled-components";

const Wrapper = styled.div`
  width: clamp(320px, 95%, 1000px);
  margin-left: auto;
  margin-right: auto;
  @media (max-width: var(--breakpoint-mobile)) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

const MaxWidthWrapper = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default MaxWidthWrapper;
