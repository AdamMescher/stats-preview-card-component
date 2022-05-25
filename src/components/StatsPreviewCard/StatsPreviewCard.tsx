import styled from "styled-components";
import DisplayMetric from "../DisplayMetric";
import heroDesktop from "./assets/image-header-desktop.jpg";
import heroMobile from "./assets/image-header-mobile.jpg";

interface Props {
  view: string;
}

const Wrapper = styled.article`
  height: 400px;
  width: 100%;
  max-width: 1000px;
  background: var(--darkSaturateBlue);
  flex: 1 1 1000px;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${({ theme }) => theme.layout.breakpoint.mobile}) {
    flex-direction: column;
    flex: 1 1 320px;
    max-width: 320px;
    height: auto;
  }
`;
const Body = styled.div`
  background: gray;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${({ theme }) => theme.layout.breakpoint.mobile}) {
    width: 100%;
  }
`;
const Hero = styled.div`
  position: relative;
  width: 50%;
  & > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  @media (max-width: ${({ theme }) => theme.layout.breakpoint.mobile}) {
    width: 100%;
    height: 240px;
  }
`;
const Overlay = styled.div`
  background: hsla(277, 64%, 61%, 0.35);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
const Content = styled.div`
  width: 85%;
  height: 85%;
  padding-left: 7.5%;
  padding-top: 7.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${({ theme }) => theme.layout.breakpoint.mobile}) {
    padding: 12px 30px;
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;
const Title = styled.h1`
  width: 16ch;
  font-size: 28px;
  line-clamp: 2;
  font-family: var(--ff-inter);
  line-height: 1.4;
  color: var(--white);
  & > span {
    color: var(--softViolet);
  }
  @media (max-width: 765px) {
    font-size: 22px;
    margin-top: 12px;
  }
  @media (max-width: ${({ theme }) => theme.layout.breakpoint.mobile}) {
    font-size: 26px;
    width: 100%;
    margin-top: 0;
  }
`;
const Copy = styled.p`
  margin-top: 36px;
  width: 36ch;
  font-family: var(--ff-lexendDeca);
  font-size: 15px;
  line-height: 1.5;
  color: var(--slightlyTransparentWhiteOne);
  @media (max-width: 765px) {
    width: 30ch;
  }
  @media (max-width: ${({ theme }) => theme.layout.breakpoint.mobile}) {
    width: 30ch;
  }
`;
const Stats = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  width: 36ch;
  @media (max-width: 765px) {
    width: 30ch;
  }
  @media (max-width: ${({ theme }) => theme.layout.breakpoint.mobile}) {
    margin-top: 50px;
    width: 100%;
    flex-direction: column;
    gap: 24px;
  }
`;

const metrics = [
  {
    value: 10001,
    unit: "companies"
  },
  {
    value: 314,
    unit: "templates"
  },
  {
    value: 12000001,
    unit: "queries"
  }
];

const StatsPreviewCard = ({ view }: Props) => {
  return (
    <Wrapper>
      <Hero>
        <Overlay />
        {view === "desktop" ? (
          <img src={heroDesktop} alt="" />
        ) : (
          <img src={heroMobile} alt="" />
        )}
      </Hero>
      <Body>
        <Content>
          <Title>
            Get <span>insights</span> that help your business grow.
          </Title>
          <Copy>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </Copy>
          <Stats>
            {metrics.map(({ value, unit }) => (
              <DisplayMetric value={value} unit={unit} />
            ))}
          </Stats>
        </Content>
      </Body>
    </Wrapper>
  );
};

export default StatsPreviewCard;
