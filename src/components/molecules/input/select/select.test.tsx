import { fireEvent, render, screen } from "@testing-library/react";
import { Select } from ".";

describe("Testando componente Select", () => {
  const opcoes = [
    { label: "Opção 1", value: "op1" },
    { label: "Opção 2", value: "op2" },
    { label: "Opção 3", value: "op3" },
  ];
  const handleChange = jest.fn();

  it("deve renderizar todas as opções fornecidas", () => {
    render(<Select values={opcoes} onChange={handleChange} disabled={false} />);

    opcoes.forEach((opcao) => {
      expect(screen.getByText(opcao.label)).toBeInTheDocument();
    });
  });

  it("deve chamar a função onChange quando uma opção é selecionada", () => {
    render(<Select values={opcoes} onChange={handleChange} disabled={false} />);

    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: opcoes[0].value } });

    expect(handleChange).toHaveBeenCalledWith(opcoes[0].value);
  });
});
