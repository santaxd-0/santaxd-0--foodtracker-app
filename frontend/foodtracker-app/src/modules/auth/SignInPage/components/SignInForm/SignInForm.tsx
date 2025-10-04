import { UIForm } from "../../../../../packages/ui/src/UIForm/index";
import { UITitle } from "../../../../../packages/ui/src/UITitle/index";
import { UIInputField } from "../../../../../packages/ui/src/UIInputField/index";
import { UIButton } from "../../../../../packages/ui/src/UIButton/index";
import { LinkToSignUp } from "./components/LinkToSignUp/index";
import { Alert } from "@mui/material";

import { onInputField } from "../../../../../packages/ui/src/UIInputField/hooks/onInputField";
import { GET_TOKEN_URL_API } from "../../../../../packages/api/src/auth/auth_apis";
import { setInputWarning } from "../../hooks/setInputWarning";
import { showAlertMessage } from "../../hooks/showAlertMessage";
import { useUserLogin } from "../../hooks/useUserLogin";
import { onSubmit } from "../../utils/onSubmit";
import { useNavigate } from "react-router-dom";


export const SignInForm = () => {
    const {email, password, setEmail, setPassword} = useUserLogin();
    const {color, focused, setWarning, resetWarning} = setInputWarning();
    const {alert, alertMessage, showAlert} = showAlertMessage();
    const navigate = useNavigate();

    return (
        <UIForm formMethod="POST" actionUrl={GET_TOKEN_URL_API}
         onSubmit={(e) => onSubmit({e, props: {fields: {email, password}, setWarning, resetWarning, showAlert, navigate}})}>
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