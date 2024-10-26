interface ErrorMessageProps {
    message: string | null;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    if (!message) return null;
    return (
        <p className="text-red-500 text-xs mt-1">
            {message}
        </p>
    );
};