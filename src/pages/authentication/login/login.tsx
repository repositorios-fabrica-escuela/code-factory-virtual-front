import { useState, FormEvent } from 'react';
import { NavBar } from '@/pages/authentication/nav/nav';
import { LoginFormContent } from '@/components/organisms/LoginFormContent';
import { LoginAlert } from '@/components/molecules/LoginAlert';

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginPage() {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });
  const [loginError, setLoginError] = useState<string | null>(null);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
    if (id === 'email') setEmailError(null);
    if (id === 'password') setPasswordError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let valid = true;

    if (!formValues.email) {
      setEmailError('Este campo es requerido.');
      valid = false;
    }


    if (!formValues.password) {
      setPasswordError('Este campo es requerido.');
      valid = false;
    }

    if (valid) {
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
    }

  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <LoginFormContent
          formValues={formValues}
          loginError={loginError}
          emailError={emailError}
          passwordError={passwordError}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        <LoginAlert
          isOpen={alertDialogOpen}
          onOpenChange={setAlertDialogOpen}
          message={alertMessage}
        />

      </div>
    </>
  );
}

export default LoginPage;