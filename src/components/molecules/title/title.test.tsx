import { render, screen } from "@testing-library/react";
import { Title } from "./";

describe("Testando o componente Título", () => {
  it("Deve renderizar o conteúdo filho corretamente", () => {
    render(<Title>Teste de Título</Title>);

    expect(screen.getByText("Teste de Título")).toBeInTheDocument();
  });

  it("Deve renderizar um elemento React como conteúdo filho", () => {
    render(
      <Title>
        <span>Teste de Título</span>
      </Title>
    );

    expect(screen.getByText("Teste de Título")).toBeInTheDocument();
  });
});
