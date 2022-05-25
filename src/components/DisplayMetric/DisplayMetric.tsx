import styled from "styled-components";

interface Props {
  value: number;
  unit: string;
}

const Wrapper = styled.div`
  font-family: var(--ff-inter);
  font-size: 18px;
`;
const Value = styled.p`
  color: var(--white);
  font-weight: bold;
`;
const Unit = styled.p`
  margin-top: 6px;
  font-family: var(--ff-lexendDeca);
  text-transform: uppercase;
  color: var(--slightlyTransparentWhiteTwo);
  font-size: 12px;
  letter-spacing: 1.4px;
`;

const numberToFormattedString = (locale: string, num: number): string => {
  const result = new Intl.NumberFormat(locale, {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(num);
  return result
    .split("")
    .map((letter) => {
      if (letter.toLowerCase() === "k") return "k";
      return letter;
    })
    .join("");
};

const DisplayMetric = ({ value, unit }: Props) => {
  const abbreviatedNumber = numberToFormattedString("en-US", value);
  return (
    <Wrapper>
      <Value>{`${abbreviatedNumber}${
        isNaN(Number(abbreviatedNumber)) ? "+" : ""
      }`}</Value>
      <Unit>{unit}</Unit>
    </Wrapper>
  );
};

export default DisplayMetric;
