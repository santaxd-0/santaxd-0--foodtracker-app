import { Box } from "@mui/material";
import loginImage from "../../../../../assets/login-page-image-window.jpg";

export const ImageContainer = () => {
    return (
        /* NOTE: Box - renders a html element */
        <Box
            component="img"
            src={loginImage}
            alt="Login page image"
            sx={{
                height: '100vh',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
            }}
        />
    )
}