import { Paragraph } from "./title.styles";

interface TitleProps {
  children: React.ReactElement | string;
}

export const Title = ({ children }: TitleProps) => {
  return <Paragraph>{children}</Paragraph>;
};
