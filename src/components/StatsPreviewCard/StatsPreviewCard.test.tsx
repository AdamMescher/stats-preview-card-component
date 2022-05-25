import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import StatsPreviewCard from "./StatsPreviewCard";

expect.extend(toHaveNoViolations);

describe("StatsPreviewCard Component", () => {
  it("Should render without axe a11y errors", async () => {
    render(<StatsPreviewCard />);
    expect(await axe(screen.getByText(/get insights/i))).toHaveNoViolations();
  });
});
