import { Button } from "@/components/ui/button";
import { ActionLink } from "@/components/atoms/ActionLink";

export const LoginActions = () => (
    <div className="flex flex-col items-center" >
        <ActionLink href="#" className="ml-auto inline-block underline">
            Recuperar contraseña
        </ActionLink>
        <Button type="submit" className="flex-1">
            <ActionLink
                href="/authentication/register/register"
                className="text-sm"
            >
                Registrar usuario
            </ActionLink>
        </Button>
    </div>
);