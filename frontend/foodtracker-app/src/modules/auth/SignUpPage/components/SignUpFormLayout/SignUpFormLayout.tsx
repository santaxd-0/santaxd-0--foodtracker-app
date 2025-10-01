import { UIForm } from "../../../../../packages/ui/src/UIForm"
import { UITitle } from "../../../../../packages/ui/src/UITitle"
import { UIInputField } from "../../../../../packages/ui/src/UIInputField" 
import { UIButton } from "../../../../../packages/ui/src/UIButton"

export const SignUpFormLayout = () => {
    return (
        <UIForm formMethod="POST" actionUrl="auth/register/">
            < UITitle text="Sign Up" />
            < UIInputField 
            label="Enter your email"
            id="email-field"
            type="email"
            required />
            < UIInputField 
            label="Enter your username"
            id="username-field"
            type=""
            required />
            < UIInputField 
            label="Enter your first name"
            id="first-name-field"
            type=""
            required />
            < UIInputField 
            label="Enter your password"
            id="password-field"
            type="password"
            required />
            < UIInputField 
            label="Enter your password again"
            id="password-confirm-field"
            type="password"
            required />
            <UIButton
             buttonText="Create an account" 
             buttonVariant="contained"
             buttonType="submit" 
             required/>
        </UIForm>
    )
}