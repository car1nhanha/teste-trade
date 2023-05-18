import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { color } from "../../../const";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  background-color: ${color.primary};
  color: ${color.white};
  padding: 10px 20px;
  text-transform: lowercase;
  transition: 0.3s;

  &:hover {
    color: ${color.white};
    box-shadow: 0px 0px 5px ${color.primary};
  }
`;

export const ButtonLinkContainer = styled(Link)`
  text-decoration: none;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  background-color: ${color.primary};
  color: ${color.white};
  padding: 10px 20px;
  text-transform: lowercase;
  transition: 0.3s;

  &:hover {
    color: ${color.white};
    box-shadow: 0px 0px 5px ${color.primary};
  }
`;
