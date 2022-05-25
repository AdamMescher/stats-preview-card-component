const theme = {
  layout: {
    breakpoint: {
      mobile: "600px",
      desktop: "1440px"
    }
  },
  color: {
    primary: {
      veryDarkBlue: "hsl(233, 47%, 7%)",
      darkDesaturatedBlue: "hsl(244, 38%, 16%)",
      softViolet: "hsl(277, 64%, 61%)"
    },
    neutral: {
      white: "hsl(0, 0%, 100%)",
      slightlyTransparentWhite: {
        one: "hsla(0, 0%, 100%, 0.75)",
        two: "hsla(0, 0%, 100%, 0.6)"
      }
    }
  },
  typography: {
    bodyCopy: {
      fontSize: "15px"
    },
    font: {
      family: {
        inter: "'Inter', sans-serif",
        lexendDeca: "'Lexend Deca', sans-serif"
      },
      weight: {
        regular: 400,
        bold: 700
      }
    }
  }
};

export default theme;
