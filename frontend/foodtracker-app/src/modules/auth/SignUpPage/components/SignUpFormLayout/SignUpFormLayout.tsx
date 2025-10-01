import { UIForm } from "../../../../../ui/UIForm"
import { UITitle } from "../../../../../ui/UITitle"
import { UIInputField } from "../../../../../ui/UIInputField" 
import { UIButton } from "../../../../../ui/UIButton"

export const SignUpFormLayout = () => {
    return (
        <UIForm>
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
             required/>
        </UIForm>
    )
}