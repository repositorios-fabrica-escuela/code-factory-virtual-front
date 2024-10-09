import { useState, FormEvent, ChangeEvent } from "react";
import { RegisterFormContent } from "@/components/organisms/RegisterFormContent";
import { SuccessAlert } from "@/components/molecules/SuccessAlert";
import { useMutation } from '@apollo/client';
import { REGISTER_MUTATION } from '@/graphql/mutations';

interface RegisterFormValues {
  name: string;
  cellphone: string;
  email: string;
  password: string;
  termino: boolean;
  politicas: boolean;
}

interface FormErrors {
  name: string | null;
  cellphone: string | null;
  email: string | null;
  password: string | null;
  termino: string | null;
  politicas: string | null;
}

const INITIAL_FORM_VALUES: RegisterFormValues = {
  name: "",
  cellphone: "",
  email: "",
  password: "",
  termino: false,
  politicas: false,
};

const INITIAL_ERRORS: FormErrors = {
  name: null,
  cellphone: null,
  email: null,
  password: null,
  termino: null,
  politicas: null,
};

// Validación de expresiones regulares
const EMAIL_REGEX = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,}$/;
const CELLPHONE_REGEX = /^3\d{9}$/;

export function RegisterPage() {
  const [formValues, setFormValues] = useState<RegisterFormValues>(INITIAL_FORM_VALUES);
  const [errors, setErrors] = useState<FormErrors>(INITIAL_ERRORS);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [register, { loading }] = useMutation(REGISTER_MUTATION);


  const validatePassword = (password: string): string | null => {
    if (!PASSWORD_REGEX.test(password)) {
      const errors: string[] = [];
      if (password.length < 8) errors.push("Debe tener al menos 8 caracteres");
      if (!/[a-z]/.test(password)) errors.push("Debe incluir al menos una letra minúscula");
      if (!/[A-Z]/.test(password)) errors.push("Debe incluir al menos una letra mayúscula");
      if (!/\d/.test(password)) errors.push("Debe incluir al menos un número");
      if (!/[@$!%*?&._-]/.test(password)) errors.push("Debe incluir al menos un carácter especial");
      return errors.join(", ");
    }
    return null;
  };

  const validateField = (id: keyof RegisterFormValues, value: string | boolean): string | null => {
    switch (id) {
      case "name":
        return typeof value === 'string' && value.trim() === ""
          ? "El nombre no es válido"
          : null;
      case "cellphone":
        return typeof value === 'string' && !CELLPHONE_REGEX.test(value)
          ? "El número de teléfono no es válido"
          : null;
      case "email":
        return typeof value === 'string' && !EMAIL_REGEX.test(value)
          ? "El correo electrónico no es válido"
          : null;
      case "password":
        return typeof value === 'string' ? validatePassword(value) : null;
      case "termino":
        return !value ? "Debe aceptar los Términos y Condiciones" : null;
      case "politicas":
        return !value ? "Debe aceptar la Política de Privacidad" : null;
      default:
        return null;
    }
  };


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const fieldName = id as keyof RegisterFormValues;

    setFormValues(prev => ({ ...prev, [fieldName]: value }));
    setErrors(prev => ({
      ...prev,
      [fieldName]: validateField(fieldName, value)
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleCheckboxChange = (id: string) => (checked: boolean) => {
    setFormValues(prev => ({ ...prev, [id]: checked }));
    setErrors(prev => ({ ...prev, [id]: null }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField("name", formValues.name),
      cellphone: validateField("cellphone", formValues.cellphone),
      email: validateField("email", formValues.email),
      password: validateField("password", formValues.password),
      termino: validateField("termino", formValues.termino),
      politicas: validateField("politicas", formValues.politicas),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== null);
  };


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { data } = await register({
        variables: {
          request: {
            fullName: formValues.name,
            email: formValues.email,
            password: formValues.password,
            phoneNumber: formValues.cellphone,
            acceptTerms: formValues.politicas,
          },
        },
      });

      if (data.register.token) {
        setAlertMessage("La información se ha guardado correctamente.");
        setAlertDialogOpen(true);
        setFormValues(INITIAL_FORM_VALUES);
        setErrors(INITIAL_ERRORS);
        console.log('Registro successful:', data.register);
        localStorage.setItem('token', data.register.token);
      } else {
        setAlertMessage("Ocurrió un error al guardar la información. Por favor, intente nuevamente.");
        setAlertDialogOpen(true);
      }
      setFormValues(INITIAL_FORM_VALUES);
      setErrors(INITIAL_ERRORS);
    } catch (error) {
      setAlertMessage("Ocurrió un error al guardar la información. Por favor, intente nuevamente.");
      setAlertDialogOpen(true);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen py-8">
        <RegisterFormContent
          formValues={formValues}
          errors={errors}
          onInputChange={handleInputChange}
          handleKeyPress={handleKeyPress}
          handleCheckboxChange={handleCheckboxChange}
          onSubmit={handleSubmit}
          isLoading={loading}
        />

        <SuccessAlert
          isOpen={alertDialogOpen}
          onOpenChange={setAlertDialogOpen}
          message={alertMessage}
        />
      </div>
    </>
  );
}

export default RegisterPage;