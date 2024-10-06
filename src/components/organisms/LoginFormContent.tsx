import { FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { FormLogin } from "@/components/atoms/FormLogin";
import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import { LoginActions } from "@/components/molecules/LoginActions";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface LoginFormContentProps {
    formValues: {
        email: string;
        password: string;
    };
    loginError: string | null;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent) => void;
}

export const LoginFormContent = ({
    formValues,
    loginError,
    onInputChange,
    onSubmit
}: LoginFormContentProps) => (
    <Card className="mx-auto max-w-sm">
        <form onSubmit={onSubmit}>
            <CardHeader className="items-center">
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription />
            </CardHeader>
            <CardContent className="items-center">
                <div className="grid gap-4">
                    <FormLogin
                        id="email"
                        label="Correo"
                        type="email"
                        placeholder="m@example.com"
                        required
                        value={formValues.email}
                        onChange={onInputChange}
                    />
                    <FormLogin
                        id="password"
                        label="Contraseña"
                        type="password"
                        placeholder="Contraseña"
                        required
                        value={formValues.password}
                        onChange={onInputChange}
                    />
                    <div className="h-4">
                        <ErrorMessage message={loginError} />
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
            <LoginActions />
        </CardFooter>
    </Card>
);