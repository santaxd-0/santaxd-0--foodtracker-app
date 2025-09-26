import { Legend } from "./components/Legend/Legend";
import { Field } from "./components/Field/Field";

export const Fieldset = () => {
    return (
       <fieldset className="login-form-component-form-fieldset">
            < Legend />
            < Field fieldName={"Email"} fieldType={"email"} />
            < Field fieldName={"Password"} fieldType={"password"}/>
       </fieldset>
    )
}