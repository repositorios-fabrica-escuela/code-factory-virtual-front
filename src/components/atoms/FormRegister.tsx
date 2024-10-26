import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputMode?: "numeric" | "text" | "tel" | "email";
  errorContainerClass?: string;
}

export const FormRegister = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  onKeyPress,
  inputMode,
  errorContainerClass = "h-4" 
}: FormInputProps) => (
  <div className="grid gap-2">
    <Label htmlFor={id}>{label}</Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      inputMode={inputMode}
      className={error ? "border-red-500" : ""}
    />
    <div className={errorContainerClass}>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  </div>
);