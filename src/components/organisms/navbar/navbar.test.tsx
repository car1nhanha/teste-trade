import { fireEvent, render } from "@testing-library/react";

import { AppContext } from "../../../context/contextApp";
import { Navbar } from "./";

describe("Testando o componente Navbar", () => {
  it("Deve renderizar o título corretamente", () => {
    const { getByText } = render(
      // @ts-ignore
      <AppContext.Provider value={{ key: "someKey" }}>
        <Navbar />
      </AppContext.Provider>
    );

    expect(getByText("api-football")).toBeInTheDocument();
  });

  it("Deve renderizar o botão de sair quando a chave é fornecida", () => {
    const { getByText } = render(
      // @ts-ignore
      <AppContext.Provider value={{ key: "someKey" }}>
        <Navbar />
      </AppContext.Provider>
    );

    expect(getByText("Sair")).toBeInTheDocument();
  });

  it("Não deve renderizar o botão de sair quando a chave não é fornecida", () => {
    const { queryByText } = render(
      // @ts-ignore
      <AppContext.Provider value={{ key: null }}>
        <Navbar />
      </AppContext.Provider>
    );

    expect(queryByText("Sair")).toBeNull();
  });

  it("Deve chamar a função de saída ao clicar no botão de sair", () => {
    const { getByText } = render(
      // @ts-ignore
      <AppContext.Provider value={{ key: "someKey" }}>
        <Navbar />
      </AppContext.Provider>
    );

    fireEvent.click(getByText("Sair"));
  });
});
