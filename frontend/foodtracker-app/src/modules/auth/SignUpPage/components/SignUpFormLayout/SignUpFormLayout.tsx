import { UIForm } from "../../../../../packages/ui/src/UIForm"
import { UITitle } from "../../../../../packages/ui/src/UITitle"
import { UIInputField } from "../../../../../packages/ui/src/UIInputField" 
import { UIButton } from "../../../../../packages/ui/src/UIButton"
import { Alert } from "@mui/material"

import { useUserSignUp } from "../../hooks/useUserSignUp"
import { onInputField } from "../../../../../packages/ui/src/UIInputField/hooks/onInputField"
import { USER_REGISTER_API } from "../../../../../packages/api/src/auth/auth_apis"
import { setInputWarning, showAlertMessage } from "../../../SignInPage"
import { useNavigate } from "react-router-dom"

export const SignUpFormLayout = () => {
    const {email, username, firstName, password, checkPassword,
        setEmail, setUsername, setFirstName, setPassword, setCheckPassword} = useUserSignUp();
    const {color, focused, setWarning, resetWarning} = setInputWarning();
    const {alert, alertMessage, showAlert} = showAlertMessage();
    const navigate = useNavigate();

    return (
        <UIForm formMethod="POST" actionUrl={USER_REGISTER_API}>
            < UITitle text="Sign Up" />
            < UIInputField 
            label="Enter your email"
            id="email-field"
            type="email"
            required
            data={email}
            color={color}
            focused={focused}
            onInput={(e) => onInputField({event: e, setter: setEmail})} />
            < UIInputField 
            label="Enter your username"
            id="username-field"
            required
            data={username}
            color={color}
            focused={focused}
            onInput={(e) => onInputField({event: e, setter: setUsername})} />
            < UIInputField 
            label="Enter your first name"
            id="first-name-field"
            required 
            data={firstName}
            color={color}
            focused={focused}
            onInput={(e) => onInputField({event: e, setter: setFirstName})}/>
            < UIInputField 
            label="Enter your password"
            id="password-field"
            type="password"
            required 
            data={password}
            color={color}
            focused={focused}
            onInput={(e) => onInputField({event: e, setter: setPassword})}/>
            < UIInputField 
            label="Enter your password again"
            id="password-confirm-field"
            type="password"
            required
            data={checkPassword}
            color={color}
            focused={focused}
            onInput={(e) => onInputField({event: e, setter: setCheckPassword})} />
            {
                (alert) ? (
                    <Alert severity="error">{alertMessage}</Alert>
                ) : null
            }
            <UIButton
             buttonText="Create an account" 
             buttonVariant="contained"
             buttonType="submit" 
             required/>
        </UIForm>
    )
}