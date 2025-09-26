import { Fieldset } from "./components/Fieldset/Fieldset";

export const Form = () => {
    return (
        <div className="login-form-component-form-container">
             <form action="POST" className="login-form-component-form">
                 <Fieldset />
             </form>
         </div>
    )
}