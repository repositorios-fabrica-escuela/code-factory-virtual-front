import { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormRegister } from "@/components/atoms/FormRegister";
import { FormCheckbox } from "@/components/atoms/FormCheckbox";
import { PrivacyLink } from "@/components/atoms/PrivacyLink";
import { PersonalInfoFields } from "@/components/molecules/PersonalInfoFields";

interface RegisterFormContentProps {
  formValues: {
    name: string;
    cellphone: string;
    email: string;
    password: string;
    termino: boolean;
    politicas: boolean;
  };
  errors: {
    name: string | null;
    cellphone: string | null;
    email: string | null;
    password: string | null;
    termino: string | null;
    politicas: string | null;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (id: string) => (checked: boolean) => void;
  onSubmit: (e: FormEvent) => void;
}

export const RegisterFormContent = ({
  formValues,
  errors,
  onInputChange,
  handleKeyPress,
  handleCheckboxChange,
  onSubmit,
}: RegisterFormContentProps) => (
  <form onSubmit={onSubmit}>
    <Card className="mx-auto max-w-md">
      <CardHeader className="items-center">
        <CardTitle className="text-xl">Registrar usuario</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <PersonalInfoFields
            formValues={formValues}
            nameError={errors.name}
            cellphoneError={errors.cellphone}
            onInputChange={onInputChange}
            handleKeyPress={handleKeyPress}
          />
          
          <FormRegister
            id="email"
            label="Correo electrónico"
            type="email"
            placeholder="m@example.com"
            value={formValues.email}
            onChange={onInputChange}
            error={errors.email}
          />
          
          <FormRegister
            id="password"
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            value={formValues.password}
            onChange={onInputChange}
            error={errors.password}
          />

          <FormCheckbox
            id="termino"
            checked={formValues.termino}
            onCheckedChange={handleCheckboxChange("termino")}
            error={errors.termino}
          >
            He leído y acepto los {" "}
            <PrivacyLink href="/authentication/register/terminos">
              Términos y Condiciones
            </PrivacyLink>
          </FormCheckbox>

          <FormCheckbox
            id="politicas"
            checked={formValues.politicas}
            onCheckedChange={handleCheckboxChange("politicas")}
            error={errors.politicas}
          >
            Autorizo que mis datos sean tratados de acuerdo a la {" "}
            <PrivacyLink href="/authentication/register/politicas">
              Política de Privacidad
            </PrivacyLink>
          </FormCheckbox>

          <div className="text-center">
            <Button type="submit">Guardar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </form>
);