import { TextField } from "@mui/material"

interface InputFieldProps {
    label: string,
    id: string,
    type: string
}

export const InputField = ({ label, id, type }: InputFieldProps) => {
    return (
        < TextField 
        id={id}
        label={label}
        type={type}
        variant="outlined"
        fullWidth
        required
        />
    )
}