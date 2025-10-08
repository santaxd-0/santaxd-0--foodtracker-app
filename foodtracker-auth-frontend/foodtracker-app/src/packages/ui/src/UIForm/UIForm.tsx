import { Box } from "@mui/material"
import type React from "react"
import type { ReactNode } from "react"

interface FormProps {
    children: ReactNode,
    formMethod: "GET" | "POST",
    actionUrl: string,
    onSubmit?: React.FormEventHandler<HTMLFormElement>
}

export const UIForm = ({children, formMethod, actionUrl, onSubmit}: FormProps) => {
    return (
        <Box component="form"
            method={formMethod}
            action={actionUrl}
            onSubmit={onSubmit}
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
                minWidth: 400,
                maxWidth: 500
            }
        }>
            {children}
        </Box>
    )
}