import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/contextApp";
import { Button } from "../../atoms/button";
import { Input } from "../../molecules/input/text";
import { Title } from "../../molecules/title";
import { BodyTemplate } from "../../organisms/body";
import { Container } from "./home.styles";

export const Login = () => {
  const { setKey } = useContext(AppContext);
  const navigate = useNavigate();

  const [keyInput, setKeyInput] = useState("");

  const onSubmit = () => {
    const regex = /^[a-f0-9]{32}$/;

    if (!regex.test(keyInput)) {
      alert("Chave incorreta");
      return;
    }

    setKey(keyInput);
    localStorage.setItem("key", keyInput);
    navigate("/home");
  };

  return (
    <BodyTemplate>
      <Container>
        <Title>Chave</Title>
        <Input values={keyInput} onChange={setKeyInput} />
      </Container>
      <Button onPress={onSubmit}>Entrar</Button>
    </BodyTemplate>
  );
};
