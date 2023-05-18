import { ContainerBody } from "./body.styles";

interface BodyTemplateProps {
  children: React.ReactElement | React.ReactElement[];
}

export const BodyTemplate = ({ children }: BodyTemplateProps) => {
  return <ContainerBody className="container">{children}</ContainerBody>;
};
