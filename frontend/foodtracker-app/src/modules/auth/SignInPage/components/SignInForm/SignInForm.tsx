import { UIForm } from "../../../../../ui/UIForm/index";
import { UITitle } from "../../../../../ui/UITitle/index";
import { UIInputField } from "../../../../../ui/UIInputField/index";
import { UIButton } from "../../../../../ui/UIButton/index";
import { LinkToSignUp } from "./components/LinkToSignUp/index";

export const SignInForm = () => {
    return (
        <UIForm>
            <UITitle text="Sign in"/>
            <UIInputField label={"Email"} id={"email-field"} type="email" required/>
            <UIInputField label={"Password"} id={"password-field"} type="password" required/>
            <UIButton buttonText={"Log in"} buttonVariant="contained" required/>
            <UIButton buttonText="Forget your password?" buttonVariant="outlined" required={false}/>
            <LinkToSignUp />
        </UIForm>
    )
}