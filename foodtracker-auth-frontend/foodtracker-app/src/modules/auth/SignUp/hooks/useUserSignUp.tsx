import { useState } from "react"

export const useUserSignUp = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");

    return {
        email, username, firstName, password, checkPassword,
        setEmail, setUsername, setFirstName, setPassword, setCheckPassword
    }
}