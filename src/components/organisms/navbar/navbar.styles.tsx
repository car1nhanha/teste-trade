import { styled } from "styled-components";
import { color } from "../../../const";

export const Container = styled.div`
  background-color: ${color.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

export const Title = styled.p`
  color: ${color.white};
  font-size: 20px;
  margin: 0;
`;

export const ContainerExit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Exit = styled.span`
  color: ${color.white};
  margin-right: 5px;
`;
