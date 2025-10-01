import { UIForm } from "../../../../../packages/ui/src/UIForm/index";
import { UITitle } from "../../../../../packages/ui/src/UITitle/index";
import { UIInputField } from "../../../../../packages/ui/src/UIInputField/index";
import { UIButton } from "../../../../../packages/ui/src/UIButton/index";
import { LinkToSignUp } from "./components/LinkToSignUp/index";

import { GET_TOKEN_URL } from "../../../../../constants/auth/constants";

export const SignInForm = () => {

    return (
        <UIForm formMethod="POST" actionUrl={GET_TOKEN_URL}>
            <UITitle text="Sign in"/>
            <UIInputField label={"Email"} id={"email-field"} type="email" required/>
            <UIInputField label={"Password"} id={"password-field"} type="password" required/>
            <UIButton buttonText={"Log in"} buttonVariant="contained" required  buttonType="submit"/>
            <UIButton buttonText="Forget your password?" buttonVariant="outlined" required={false}/>
            <LinkToSignUp />
        </UIForm>
    )
}