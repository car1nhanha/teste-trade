import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./";

describe("Testando o componente Input", () => {
  it("Deve renderizar o valor fornecido", () => {
    const handleOnChange = jest.fn();
    render(<Input values="Texto de Teste" onChange={handleOnChange} />);

    expect(screen.getByDisplayValue("Texto de Teste")).toBeInTheDocument();
  });

  it("Deve chamar a função onChange quando alterado", () => {
    const handleOnChange = jest.fn();
    render(<Input values="" onChange={handleOnChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Novo Texto" } });

    expect(handleOnChange).toHaveBeenCalledWith("Novo Texto");
  });

  it("Deve ser desativado quando a propriedade disabled é verdadeira", () => {
    const handleOnChange = jest.fn();
    render(<Input values="" onChange={handleOnChange} disabled />);

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });
});
