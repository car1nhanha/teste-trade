import { styled } from "styled-components";
import { color } from "../../../const";

export const Container = styled.div`
  margin: 15px 0;
  width: 100%;
`;

export const ContainerNames = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const PlayerCard = styled.span`
  background: ${color.primary};
  color: ${color.white};
  padding: 5px;
  margin: 5px;
  font-size: 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SimpleText = styled.span`
  color: #000;
  font-size: 12px;
`;

export const ImagePlayer = styled.img`
  border-radius: 5px 5px 0 0;
  width: 5em;
  margin-bottom: 4px;
`;
