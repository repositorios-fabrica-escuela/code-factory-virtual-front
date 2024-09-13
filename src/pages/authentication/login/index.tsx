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

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm">
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
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Contraseña</Label>

              </div>
              <Input id="password" placeholder="Contraseña" type="password" required />
            </div>
            <div>
              <Button type="submit" className="w-full">
                Acceder
              </Button>
            </div>
            <div className="items-center text-center">
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Recuperar contraseña
              </Link>
              <Button variant="outline" className="w-full">
                Registrar usuario
              </Button>
            </div>
          </div>


        </CardContent>
      </Card>
    </div>
  )
}
