import { Alert } from "@mui/material";
import { UILink } from "./components/UILink/index";

export const LinkToSignUp = () => {
    return (
        <Alert variant="outlined" severity="info" color="success">
            Don`t have an account? < UILink linkText="Sign up here"/>
        </Alert>
    )
}