import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FormCheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  error?: string | null;
  children: React.ReactNode;
}

export const FormCheckbox = ({
  id,
  checked,
  onCheckedChange,
  error,
  children
}: FormCheckboxProps) => (
  <div>
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      <Label htmlFor={id}>{children}</Label>
    </div>
    <div className="h-4">
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  </div>
);