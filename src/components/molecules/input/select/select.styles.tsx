import { css, styled } from "styled-components";
import { color } from "../../../../const";

interface SelectProps {
  disabled?: boolean;
}

export const SelectContainer = styled.select<SelectProps>`
  width: 100%;
  margin: 0;
  padding: 0;
  border: 1px solid ${color.primary};
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  font-size: 16px;
  appearance: none;
  background: none;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  outline: ${color.primary};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;
