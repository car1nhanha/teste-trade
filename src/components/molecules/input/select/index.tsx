import { SelectContainer } from "./select.styles";

interface SelectProps {
  values: { label: string; value: string }[];
  onChange: (value: string) => void;
  disabled: boolean;
}

export const Select = ({ values, onChange, disabled = false }: SelectProps) => {
  return (
    <SelectContainer
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      {values.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </SelectContainer>
  );
};
