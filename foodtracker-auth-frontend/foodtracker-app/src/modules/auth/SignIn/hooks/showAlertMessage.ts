import { useState } from "react";

export const showAlertMessage = () => {
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const showAlert = (alertMessage : string) => {
        setAlert(true);
        setAlertMessage(alertMessage);
    }

    return { alert, alertMessage, showAlert };
}