import { Form } from "./components/Form/index";
import { Title } from "./components/Title/index";
import { InputField } from "./components/InputField/index";
import { UIButton } from "./components/UIButton/index";
import { LinkToSignUp } from "./components/LinkToSignUp/index";

export const SignInForm = () => {
    return (
        <Form>
            <Title />
            <InputField label={"Email"} id={"email-field"} type="email"/>
            <InputField label={"Password"} id={"password-field"} type="password"/>
            <UIButton buttonText={"Log in"} buttonVariant="contained" required/>
            <UIButton buttonText="Forget your password?" buttonVariant="outlined" required={false}/>
            <LinkToSignUp />
        </Form>
    )
}