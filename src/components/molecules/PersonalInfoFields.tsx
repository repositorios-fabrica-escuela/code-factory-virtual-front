import { FormRegister } from "@/components/atoms/FormRegister";

interface PersonalInfoFieldsProps {
  formValues: {
    name: string;
    cellphone: string;
  };
  nameError: string | null;
  cellphoneError: string | null;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const PersonalInfoFields = ({
  formValues,
  nameError,
  cellphoneError,
  onInputChange,
  handleKeyPress,
}: PersonalInfoFieldsProps) => (
  <div className="grid grid-cols-2 gap-4">
    <FormRegister
      id="name"
      label="Nombre"
      placeholder="Nombre"
      value={formValues.name}
      onChange={onInputChange}
      error={nameError}
    />
    <FormRegister
      id="cellphone"
      label="Número de teléfono"
      type="tel"
      placeholder="xxx xxx xxxx"
      value={formValues.cellphone}
      onChange={onInputChange}
      onKeyPress={handleKeyPress}
      inputMode="numeric"
      error={cellphoneError}
    />
  </div>
);