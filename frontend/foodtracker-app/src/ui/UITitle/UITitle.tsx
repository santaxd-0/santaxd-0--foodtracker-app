import { Box } from "@mui/material"

interface TitleProps {
    text: string
}

export const UITitle = ({ text }: TitleProps) => {
    return (
        <Box 
        component="h1"
        sx={{
            color: "black"
        }}>
            {text}
        </Box>
    )
}