import { InputContainer } from "./select.styles";

interface InputProps {
  values: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const Input = ({ values, onChange, disabled = false }: InputProps) => {
  return (
    <InputContainer
      value={values}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    />
  );
};
