import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Button, ButtonLink } from "./";

describe("Button", () => {
  it("renderização do Button com filho e evento de click", () => {
    const handleClick = jest.fn();

    render(<Button onPress={handleClick}>Test Button</Button>);

    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renderização do ButtonLink com filho e com o evento href correto", () => {
    const testLink = "/test-link";

    render(
      <BrowserRouter>
        <ButtonLink to={testLink}>Test ButtonLink</ButtonLink>
      </BrowserRouter>
    );

    const linkElement = screen.getByText(/Test ButtonLink/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", testLink);
  });
});
