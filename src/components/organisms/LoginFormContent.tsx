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
import { Loader2 } from "lucide-react"; 

interface LoginFormContentProps {
    formValues: {
        email: string;
        password: string;
    };
    loginError: string | null;
    emailError: string | null;
    passwordError: string | null;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent) => void;
    isLoading: boolean;
}

export const LoginFormContent = ({
    formValues,
    loginError,
    emailError,
    passwordError,
    onInputChange,
    onSubmit,
    isLoading
}: LoginFormContentProps) => (
    <Card className="flex-1 mx-auto max-w-sm">
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
                        value={formValues.email}
                        onChange={onInputChange}
                    />
                    <div className="h-4">
                        <ErrorMessage message={emailError} />
                    </div>
                    <FormLogin
                        id="password"
                        label="Contraseña"
                        type="password"
                        placeholder="Contraseña"
                        value={formValues.password}
                        onChange={onInputChange}
                    />
                    <div className="h-4">
                        <ErrorMessage message={passwordError} />
                    </div>
                    <div className="h-4">
                        <ErrorMessage message={loginError} />
                    </div>
                    <div className="text-center">
                        <Button type="submit" className="w-auto" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Cargando...
                                </>
                            ) : (
                                'Acceder'
                            )}
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