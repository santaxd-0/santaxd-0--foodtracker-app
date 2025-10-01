import { TextField } from "@mui/material"

interface InputFieldProps {
    label: string,
    id: string,
    type: string,
    required: boolean
}

export const InputField = ({ label, id, type, required }: InputFieldProps) => {
    return (
        < TextField 
        id={id}
        label={label}
        type={type}
        variant="outlined"
        fullWidth
        required={required}
        />
    )
}