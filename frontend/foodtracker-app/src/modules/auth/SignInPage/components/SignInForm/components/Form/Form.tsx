import { Box } from "@mui/material"
import type { ReactNode } from "react"

interface FormProps {
    children: ReactNode;
}

export const Form = ({children}: FormProps) => {
    return (
        <Box component="form"
            sx={{
                border: 1,
                borderColor: "green",
                borderRadius: 5,
                borderWidth: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 5,
                gap: 2,
            }
        }>
            {children}
        </Box>
    )
}