import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { NavBar } from '@/pages/authentication/nav/index';

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

export function RegisterForm() {
  return (
    
      
      <div className="flex justify-center items-center h-screen">
        <form action="">
          <Card className="mx-auto max-w-sm">
            <CardHeader className=" items-center">
              <CardTitle className="text-xl ">Registrar usuario</CardTitle>
              <CardDescription>

              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Nombre" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cellphone">Número de teléfono</Label>
                    <Input id="cellphone" placeholder="xxx xxx xxxx" required />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input id="password" placeholder="Contraseña" type="password" required />
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="termino" />
                    <Label htmlFor="termino">He leído y acepto los &nbsp;
                    <a className="underline underline-offset-4 hover:text-primary" href="/terms">Términos y Condiciones</a>
                    </Label>
                    
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="politicas" />
                    <Label htmlFor="ploticas">Autorizo que mis datos sean tratados de acuerdo a la &nbsp;
                      <a className="underline underline-offset-4 hover:text-primary" href="/terms">Política de Privacidad</a>
                    </Label>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Guardar
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>

      </div>
  
  )
}


