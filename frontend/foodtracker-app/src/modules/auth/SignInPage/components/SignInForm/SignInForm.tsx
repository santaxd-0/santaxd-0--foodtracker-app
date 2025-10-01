import { Form } from "../../../../../ui/Form/index";
import { Title } from "../../../../../ui/Title/index";
import { InputField } from "../../../../../ui/InputField/index";
import { UIButton } from "../../../../../ui/UIButton/index";
import { LinkToSignUp } from "./components/LinkToSignUp/index";

export const SignInForm = () => {
    return (
        <Form>
            <Title />
            <InputField label={"Email"} id={"email-field"} type="email" required/>
            <InputField label={"Password"} id={"password-field"} type="password" required/>
            <UIButton buttonText={"Log in"} buttonVariant="contained" required/>
            <UIButton buttonText="Forget your password?" buttonVariant="outlined" required={false}/>
            <LinkToSignUp />
        </Form>
    )
}