import { TextField } from "@mui/material"
import React from "react"

interface InputFieldProps {
    label: string,
    id: string,
    type?: string,
    required: boolean,
    data?: string,
    onInput?: React.ChangeEventHandler<HTMLInputElement>,
    color?: "success" | "warning",
    focused?: boolean
}

export const UIInputField = ({ label, id, type, required, color, data, onInput }: InputFieldProps) => {


    return (
        < TextField 
        id={id}
        label={label}
        type={type}
        variant="outlined"
        fullWidth
        color={color}
        required={required}
        value={data}
        onInput={onInput}
        error={color === "warning"}
        />
    )
}