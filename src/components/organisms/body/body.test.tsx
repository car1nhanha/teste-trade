import { render, screen } from "@testing-library/react";
import { BodyTemplate } from "./";

describe("Testando o componente BodyTemplate", () => {
  it("Deve renderizar o conteúdo filho corretamente", () => {
    render(
      <BodyTemplate>
        <div>Conteúdo de teste</div>
      </BodyTemplate>
    );

    expect(screen.getByText("Conteúdo de teste")).toBeInTheDocument();
  });

  it("Deve renderizar múltiplos elementos React como conteúdo filho", () => {
    render(
      <BodyTemplate>
        <div>Conteúdo de teste 1</div>
        <div>Conteúdo de teste 2</div>
      </BodyTemplate>
    );

    expect(screen.getByText("Conteúdo de teste 1")).toBeInTheDocument();
    expect(screen.getByText("Conteúdo de teste 2")).toBeInTheDocument();
  });
});
