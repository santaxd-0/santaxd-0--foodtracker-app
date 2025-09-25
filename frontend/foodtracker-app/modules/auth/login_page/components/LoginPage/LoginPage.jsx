import { LoginForm } from "./components/LoginForm/LoginForm"
import { ImageWindow } from "./components/ImageWindow/ImageWindow"

import "./LoginPage.css"

export const LoginPage = () => {
    return (
        <div className="login-page">
            < LoginForm />
            < ImageWindow />
        </div>
    )
}