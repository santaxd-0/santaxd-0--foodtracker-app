import { TextField } from "@mui/material"
import React, { useState } from "react"

interface InputFieldProps {
    label: string,
    id: string,
    type: string,
    required: boolean
}

export const UIInputField = ({ label, id, type, required }: InputFieldProps) => {
    const [data, setData] = useState("");

    const inputData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value);
    }

    return (
        < TextField 
        id={id}
        label={label}
        type={type}
        variant="outlined"
        fullWidth
        required={required}
        value={data}
        onInput={inputData}
        />
    )
}