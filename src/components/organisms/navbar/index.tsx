import { useContext } from "react";
import { AppContext } from "../../../context/contextApp";
import { Container, ContainerExit, Exit, Title } from "./navbar.styles";

export const Navbar = () => {
  const { key } = useContext(AppContext);

  const exit = () => {
    localStorage.removeItem("key");
    window.location.href = "/";
  };

  return (
    <>
      <Container>
        <Title>api-football</Title>
        {key && (
          <ContainerExit onClick={() => exit()}>
            <Exit>Sair</Exit>
          </ContainerExit>
        )}
      </Container>
    </>
  );
};
