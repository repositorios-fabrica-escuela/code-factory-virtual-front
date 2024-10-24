import { useState, FormEvent, ChangeEvent, useEffect } from "react";

import { SuccessAlert } from "@/components/molecules/SuccessAlert";
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER, UPDATE_USER_MUTATION } from '@/graphql/mutations';
import { UpdateFormContent } from "@/components/organisms/UpdateFormContent";
import { jwtDecode } from "jwt-decode";
import { Token, User } from "@/types/graphql"
import { getFromLocalStorage } from "@/lib/tokenUtils";

interface UpdateFormValues {
    name: string;
    cellphone: string;
    email: string;
}

interface FormErrors {
    name: string | null;
    cellphone: string | null;
    email: string | null;
}



const INITIAL_ERRORS: FormErrors = {
    name: null,
    cellphone: null,
    email: null,
};

const EMAIL_REGEX = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
const CELLPHONE_REGEX = /^3\d{9}$/;

export function UpdatePage() {
    const [userId, setUserId] = useState<string | null>(null);
    const [formValues, setFormValues] = useState<UpdateFormValues>({
        name: '',
        cellphone: '',
        email: '',
    });
    useEffect(() => {
        const token = getFromLocalStorage('token', null);
        if (token) {
            try {
                const userDecoded: Token = jwtDecode(token);
                setUserId(userDecoded.id);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        } else {
            console.log('No token found, skipping decode.');
        }
    }, []);

    const { data } = useQuery<{ getUser: User }>(GET_USER, {
        variables: { id: userId },
        skip: !userId,
    });

    useEffect(() => {
        if (data && data.getUser) {
            const userInfo = data.getUser;
            setFormValues({
                name: userInfo.fullName,
                cellphone: userInfo.phoneNumber,
                email: userInfo.email,
            });
        }
    }, [data]);

    
    const [errors, setErrors] = useState<FormErrors>(INITIAL_ERRORS);
    const [alertDialogOpen, setAlertDialogOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const [updateUser, { loading }] = useMutation(UPDATE_USER_MUTATION);

    const validateField = (id: keyof UpdateFormValues, value: string): string | null => {
        switch (id) {
            case "name":
                return value.trim() === "" ? "El nombre no es válido" : null;
            case "cellphone":
                return !CELLPHONE_REGEX.test(value) ? "El número de teléfono no es válido" : null;
            case "email":
                return !EMAIL_REGEX.test(value) ? "El correo electrónico no es válido" : null;
            default:
                return null;
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        const fieldName = id as keyof UpdateFormValues;

        setFormValues(prev => ({ ...prev, [fieldName]: value }));
        setErrors(prev => ({
            ...prev,
            [fieldName]: validateField(fieldName, value)
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {
            name: validateField("name", formValues.name),
            cellphone: validateField("cellphone", formValues.cellphone),
            email: validateField("email", formValues.email),
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
            const { data } = await updateUser({
                variables: {
                    input: {
                        name: formValues.name,
                        email: formValues.email,
                        cellphone: formValues.cellphone,
                    },
                },
            });

            if (data.updateUser.success) { // Asegúrate de ajustar esto según la respuesta de tu mutación
                setAlertMessage("La información se ha actualizado correctamente.");
                setAlertDialogOpen(true);
                setErrors(INITIAL_ERRORS);
            } else {
                setAlertMessage("Ocurrió un error al actualizar la información. Por favor, intente nuevamente.");
                setAlertDialogOpen(true);
            }
        } catch (error) {
            setAlertMessage("Ocurrió un error al actualizar la información. Por favor, intente nuevamente.");
            setAlertDialogOpen(true);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen py-8">
                <UpdateFormContent
                    formValues={formValues}
                    errors={errors}
                    onInputChange={handleInputChange}

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

export default UpdatePage;
