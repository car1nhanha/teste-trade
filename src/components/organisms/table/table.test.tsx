import { render } from "@testing-library/react";
import { Table } from "./";

describe("Testando o componente Tabela", () => {
  const mockData = [
    { col1: "Linha 1, Coluna 1", col2: "Linha 1, Coluna 2" },
    { col1: "Linha 2, Coluna 1", col2: "Linha 2, Coluna 2" },
  ];

  const mockColumns = [
    { key: "col1", header: "Cabeçalho 1" },
    { key: "col2", header: "Cabeçalho 2" },
  ];

  it("Deve renderizar corretamente as colunas", () => {
    const { getAllByRole } = render(
      <Table columns={mockColumns} data={mockData} />
    );

    const headers = getAllByRole("columnheader").map((col) => col.textContent);
    expect(headers).toEqual(["Cabeçalho 1", "Cabeçalho 2"]);
  });

  it("Deve renderizar corretamente as linhas", () => {
    const { getAllByRole } = render(
      <Table columns={mockColumns} data={mockData} />
    );

    const cells = getAllByRole("cell").map((cell) => cell.textContent);
    expect(cells).toEqual([
      "Linha 1, Coluna 1",
      "Linha 1, Coluna 2",
      "Linha 2, Coluna 1",
      "Linha 2, Coluna 2",
    ]);
  });
});
