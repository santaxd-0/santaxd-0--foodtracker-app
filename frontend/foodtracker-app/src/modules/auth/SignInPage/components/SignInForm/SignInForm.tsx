import { UIForm } from "../../../../../packages/ui/src/UIForm/index";
import { UITitle } from "../../../../../packages/ui/src/UITitle/index";
import { UIInputField } from "../../../../../packages/ui/src/UIInputField/index";
import { UIButton } from "../../../../../packages/ui/src/UIButton/index";
import { LinkToSignUp } from "./components/LinkToSignUp/index";
import { Alert } from "@mui/material";

import { onInputField } from "../../../../../packages/ui/src/UIInputField/hooks/onInputField";
import { GET_TOKEN_URL_API } from "../../../../../packages/api/src/auth/auth_apis";
import { MAIN_PAGE_URL } from "../../../../../constants/app/constants";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setInputWarning } from "./hooks/setInputWarning";
import { showAlertMessage } from "./hooks/showAlertMessage";
import { useUserLogin } from "./hooks/useUserLogin";


export const SignInForm = () => {
    const {email, password, setEmail, setPassword} = useUserLogin();
    const {color, focused, setWarning, resetWarning} = setInputWarning();
    const {alert, alertMessage, showAlert} = showAlertMessage();

    const navigate = useNavigate();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // email: test_admin@example.com
        // password: 123456

        axios.post(GET_TOKEN_URL_API, {
            email: email,
            password: password
        })
        .then((response) => {
            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            if (localStorage.getItem("access") && localStorage.getItem("refresh")){
                resetWarning();
                navigate(MAIN_PAGE_URL);
            }
        })
        .catch((error) => {
            setWarning();
            if (error.response) {
                /* NOTE: If server response with status code not 2xx */
                showAlert("Your email or password is wrong! Please try again!");
            }
            else if (error.request) {
                /* NOTE: If request was done but response were not given */
                showAlert("Something went wrong. Please try again!");
            }
            else {
                /* NOTE: Something happened while providing request */
                showAlert("Something went wrong. Please try again!");
            }
        });
    }

    return (
        <UIForm formMethod="POST" actionUrl={GET_TOKEN_URL_API} onSubmit={onSubmit}>
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