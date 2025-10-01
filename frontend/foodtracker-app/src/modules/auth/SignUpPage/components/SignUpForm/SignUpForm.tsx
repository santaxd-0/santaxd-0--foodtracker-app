import { Box } from "@mui/material"
import { SignUpFormLayout } from "../SignUpFormLayout"

export const SignUpForm = () => {
    return (
        <Box
        sx = {
            {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
            }
        }>
            < SignUpFormLayout />
        </Box>
    )
}