import {useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { NavBar } from '@/pages/authentication/nav/nav';

export const description = "Por favor, complete todos los campos para crear una cuenta";

interface RegisterFormValues {
  name: string;
  cellphone: string;
  email: string;
  password: string;
  termino: boolean;
  politicas: boolean;
}

export function RegisterForm() {
  const [formValues, setFormValues] = useState<RegisterFormValues>({
    name: "",
    cellphone: "",
    email: "",
    password: "",
    termino: false,
    politicas: false,
  });

  const emailRegex = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,}$/
  const [cellphoneError, setCellphoneError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [terminoError, setTerminoError] = useState<string | null>(null);
  const [politicasError, setPoliticasError] = useState<string | null>(null);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "cellphone") {
      if (!validateCellphone(value)) {
        setCellphoneError("El número de teléfono no es válido");
      } else {
        setCellphoneError(null);
      }
    }
    if (id === "name") {
      if (value.trim() === "") {
        setNameError("El nombre no es válido");
      } else {
        setNameError(null);
      }
    }
    if (id === "email") {

      if (!emailRegex.test(value)) {
        setEmailError("El correo electrónico no es válido");
      } else {
        setEmailError(null);
      }
    }

    if (id === "password") {
      if (!passwordRegex.test(value)) {
        const errors: string[] = [];
        if (value.length < 8) errors.push("Debe tener al menos 8 caracteres");
        if (!/[a-z]/.test(value)) errors.push("Debe incluir al menos una letra minúscula");
        if (!/[A-Z]/.test(value)) errors.push("Debe incluir al menos una letra mayúscula");
        if (!/\d/.test(value)) errors.push("Debe incluir al menos un número");
        if (!/[@$!%*?&._-]/.test(value)) errors.push("Debe incluir al menos un carácter especial");
        setPasswordError(errors.join(", "));
      } else {
        setPasswordError(null);
      }
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const validateCellphone = (value: string) => {
    return /^3\d{9}$/.test(value);
  };

  const handleCheckboxChange = (id: string) => (checked: boolean) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: checked,
    }));

    if (id === "termino") {
      setTerminoError(null);
    }

    if (id === "politicas") {
      setPoliticasError(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    //validar nombre
    if (formValues.name.trim() === "") {
      setNameError("El nombre no es válido");
      return;
    }

    //validar numero
    if (!validateCellphone(formValues.cellphone)) {
      setCellphoneError("El número de teléfono no es válido");
      return;
    }

    //validar correo
    if (!emailRegex.test(formValues.email)) {
      setEmailError("El correo es inválido");
      return;
    }

    //validar contrasena
    if (!passwordRegex.test(formValues.password)) {
      const errors: string[] = [];
      if (formValues.password.length < 8) errors.push("Debe tener al menos 8 caracteres");
      if (!/[a-z]/.test(formValues.password)) errors.push("Debe incluir al menos una letra minúscula");
      if (!/[A-Z]/.test(formValues.password)) errors.push("Debe incluir al menos una letra mayúscula");
      if (!/\d/.test(formValues.password)) errors.push("Debe incluir al menos un número");
      if (!/[@$!%*?&._-]/.test(formValues.password)) errors.push("Debe incluir al menos un carácter especial");
      setPasswordError(errors.join(", "));
      return;
    }

    if (!formValues.termino) {
      setTerminoError("Debe aceptar los Términos y Condiciones ");
      return;
    }

    if (!formValues.politicas) {
      setPoliticasError("Debe aceptar la Política de Privacidad");
      return;
    }

    
    setAlertMessage("La información se ha guardado correctamente.");
    setAlertDialogOpen(true);

    console.log("Form values:", formValues);
    // logica del endpoint

    setFormValues({
      name: '',
      cellphone: '',
      email: '',
      password: '',
      termino: false,
      politicas: false,
    });
  };

  return (
    <><NavBar />
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <Card className="mx-auto max-w-md">
          <CardHeader className="items-center">
            <CardTitle className="text-xl">Registrar usuario</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    placeholder="Nombre"
                    value={formValues.name}
                    onChange={handleInputChange}

                    className={nameError ? "border-red-500" : ""} />
                  <div className="h-4">
                    {nameError && (
                      <p className="text-red-500 text-xs mt-1">
                        {nameError}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cellphone">Número de teléfono</Label>
                  <Input
                    id="cellphone"
                    type="tel"
                    placeholder="xxx xxx xxxx"
                    value={formValues.cellphone}
                    onChange={handleInputChange}
                    inputMode="numeric"
                    onKeyPress={handleKeyPress}

                    className={cellphoneError ? "border-red-500" : ""} />
                  <div className="h-4">
                    {cellphoneError && (
                      <p className="text-red-500 text-xs mt-1">
                        {cellphoneError}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={emailError ? "border-red-500" : ""} />
                <div className="h-4">
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">
                      {emailError}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  value={formValues.password}
                  onChange={handleInputChange}
                  className={passwordError ? "border-red-500" : ""} />
                <div className="h-11">
                  {passwordError && (
                    <p className="text-red-500 text-xs mt-1">
                      {passwordError}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="termino"
                    checked={formValues.termino}
                    onCheckedChange={handleCheckboxChange("termino")} />
                  <Label htmlFor="termino">
                    He leído y acepto los &nbsp;
                    <Link
                      className="underline underline-offset-4 hover:text-primary"
                      href="/authentication/register/terminos"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Términos y Condiciones
                    </Link>
                  </Label>
                </div>
                <div className="h-4">
                  {terminoError && (
                    <p className="text-red-500 text-xs mt-1">
                      {terminoError}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="politicas"
                    checked={formValues.politicas}
                    onCheckedChange={handleCheckboxChange("politicas")} />
                  <Label htmlFor="politicas">
                    Autorizo que mis datos sean tratados de acuerdo a la &nbsp;
                    <Link
                      className="underline underline-offset-4 hover:text-primary"
                      href="/authentication/register/politicas"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Política de Privacidad
                    </Link>
                  </Label>
                </div>
                <div className="h-4">
                  {politicasError && (
                    <p className="text-red-500 text-xs mt-1">
                      {politicasError}
                    </p>
                  )}
                </div>
              </div>
              <div className="text-center">
                <Button type="submit">Guardar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>

      <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Registro exitoso</AlertDialogTitle>
            <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setAlertDialogOpen(false)}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div></>
  );
}
export default RegisterForm;
