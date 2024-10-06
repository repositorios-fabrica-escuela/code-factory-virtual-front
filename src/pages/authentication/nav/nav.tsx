import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  User, 
  LogOut,
} from "lucide-react"
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"

export function NavBar() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 flex h-24 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex-1 items-center gap-4">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <div className="flex ">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <Image
                  src="/logo2.svg"
                  alt="Acme Inc Logo"
                  width={120}
                  height={40}
                  className="h-18 w-auto"
                  priority
                />
                <span className="font-roboto font-black text-5xl">Singapur</span>
              </Link>
            </div>

            <div className="flex-1 flex justify-center  h-full">
              <Link
                href="#"
                className="text-foreground transition-colors hover:text-foreground mx-4"
              >
                Gestión de vuelos
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground mx-4"
              >
                Permisos de usuario
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground mx-4"
              >
                Reservas
              </Link>
            </div>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Image
                    src="/logo2.svg"
                    alt="Acme Inc Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                    priority
                  />
                  <span className="font-roboto font-black text-3xl" >Singapur</span>
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Gestión de vuelos
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Permisos de usuario
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Reservas
                </Link>

              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-18 w-18">
              <img src="/logo.png" alt="User avatar" className="h-12 w-12 rounded-full" />
              <span className="sr-only">Open user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              Perfil
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex items-center">
              <LogOut className="mr-2 h-4 w-4" />
              Salir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </div>
  );
}

export default NavBar;