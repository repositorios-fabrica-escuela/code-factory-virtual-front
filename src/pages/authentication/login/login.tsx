
import { useState, FormEvent } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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


export const description = "A login form component with email and password fields";

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });

  const [LoginError, setLoginError] = useState<string | null>(null);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formValues.email !== 'test@example.com' || formValues.password !== 'password') {
      setLoginError('Usuario o contraseña incorrectos');
    } else {
      console.log('Form submitted with values:', formValues);

      setLoginError(null);
      setAlertMessage("Ingreso exitoso.");
      setAlertDialogOpen(true);
      setFormValues({
        email: '',
        password: '',
      });
    }
  };

  return (
    <><NavBar/><div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm">
        <form onSubmit={handleSubmit}>
          <CardHeader className="items-center">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className="items-center">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Correo</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={formValues.email}
                  onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input
                  id="password"
                  placeholder="Contraseña"
                  type="password"
                  required
                  value={formValues.password}
                  onChange={handleInputChange} />
              </div>
              <div className="h-4">
                {LoginError && (
                  <p className="text-red-500 text-xs mt-1">
                    {LoginError}
                  </p>
                )}
              </div>
              <div className="text-center">
                <Button type="submit" className="w-auto">
                  Acceder
                </Button>
              </div>
            </div>
          </CardContent>
        </form>
        <CardFooter className="flex flex-col items-center">
          <div className="items-center text-center">
            <Link href="#" className="ml-auto inline-block text-sm underline">
              Recuperar contraseña
            </Link>
            <Button type='submit' className="w-2/3">
              <Link
                href="/authentication/register/register"
                className=" text-sm "
                target="_blank"
                rel="noopener noreferrer">
                Registrar usuario
              </Link>

            </Button>
          </div>
        </CardFooter>
      </Card>


      <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Login correcto</AlertDialogTitle>
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
export default LoginForm;
