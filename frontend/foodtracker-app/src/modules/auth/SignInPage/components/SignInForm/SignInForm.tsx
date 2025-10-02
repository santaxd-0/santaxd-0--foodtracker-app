import { UIForm } from "../../../../../packages/ui/src/UIForm/index";
import { UITitle } from "../../../../../packages/ui/src/UITitle/index";
import { UIInputField } from "../../../../../packages/ui/src/UIInputField/index";
import { UIButton } from "../../../../../packages/ui/src/UIButton/index";
import { LinkToSignUp } from "./components/LinkToSignUp/index";
import { Alert } from "@mui/material";

import { onInputField } from "../../../../../packages/ui/src/UIInputField/hooks/onInputField";
import { GET_TOKEN_URL } from "../../../../../packages/api/src/auth/auth_apis";
import { useState } from "react";
import axios from "axios";


export const SignInForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [color, setColor] = useState<"success" | "warning">("success");
    const [focused, setFocused] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const showAlert = (alertMessage : string) => {
        setAlert(true);
        setAlertMessage(alertMessage);
    }

    const setWarning = () => {
        setColor("warning");
        setFocused(true);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        axios.post(GET_TOKEN_URL, {
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            setWarning();
            if (error.response) {
                /* NOTE: If server response with status code not 2xx */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                showAlert("Your email or password is wrong! Please try again!");
            }
            else if (error.request) {
                /* NOTE: If request was done but response were not given */
                showAlert("Something went wrong. Please try again!");
                console.log(error.request);
            }
            else {
                /* NOTE: Something happened while providing request */
                showAlert("Something went wrong. Please try again!");
                console.log(error.message);
            }
            console.log(error.config);
        });
    }

    return (
        <UIForm formMethod="POST" actionUrl={GET_TOKEN_URL} onSubmit={onSubmit}>
            <UITitle text="Sign in"/>
            <UIInputField label={"Email"} id={"email-field"} type="email" required
            data={email} onInput={(e) => onInputField({event: e, setter: setEmail})}
            color={color} focused={focused}/>
            <UIInputField label={"Password"} id={"password-field"} type="password" required
            data={password} onInput={(e) => onInputField({event: e, setter: setPassword})}
            color={color} focused={focused}/>
            {
                (alert) ? (
                    <Alert severity="error">{alertMessage}</Alert>
                ) : null
            }
            <UIButton buttonText={"Log in"} buttonVariant="contained" required  buttonType="submit"/>
            <UIButton buttonText="Forget your password?" buttonVariant="outlined" required={false}/>
            <LinkToSignUp />
        </UIForm>
    )
}