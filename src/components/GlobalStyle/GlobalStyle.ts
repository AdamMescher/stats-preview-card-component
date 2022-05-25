import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --breakpoint-mobile: ${theme.layout.breakpoint.mobile};
    --breakpoint-desktop: ${theme.layout.breakpoint.desktop};
    --veryDarkBlue: ${theme.color.primary.veryDarkBlue};
    --darkDesaturatedBlue: ${theme.color.primary.darkDesaturatedBlue};
    --softViolet: ${theme.color.primary.softViolet};
    --white: ${theme.color.neutral.white};
    --slightlyTransparentWhiteOne: ${theme.color.neutral.slightlyTransparentWhite.one};
    --slightlyTransparentWhiteTwo: ${theme.color.neutral.slightlyTransparentWhite.two};
    --fs-body: ${theme.typography.bodyCopy.fontSize};
    --ff-inter: ${theme.typography.font.family.inter};
    --ff-lexendDeca: ${theme.typography.font.family.lexendDeca}
    --fw-regular: ${theme.typography.font.weight.regular};
    --fw-bold: ${theme.typography.font.weight.bold};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
