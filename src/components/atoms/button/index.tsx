import { ButtonContainer, ButtonLinkContainer } from "./button.styles";

interface ButtonProps {
  children: string;
  onPress?: () => void;
}

export const Button = ({ children, onPress }: ButtonProps) => {
  return <ButtonContainer onClick={onPress}>{children}</ButtonContainer>;
};

export const ButtonLink = ({
  children,
  to,
}: {
  children: string;
  to: string;
}) => {
  return <ButtonLinkContainer to={to}>{children}</ButtonLinkContainer>;
};
