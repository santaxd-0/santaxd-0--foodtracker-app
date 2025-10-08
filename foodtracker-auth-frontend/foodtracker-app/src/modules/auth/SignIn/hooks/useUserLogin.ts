import { useState } from "react"

export const useUserLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return {email, password, setEmail, setPassword};
}