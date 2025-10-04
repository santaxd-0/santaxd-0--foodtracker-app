import { useState } from "react"

export const setInputWarning = () => {
    const [color, setColor] = useState<"success" | "warning">("success");
    const [focused, setFocused] = useState(false);

    const setWarning = () => {
        setColor("warning");
        setFocused(true);
    };

    const resetWarning = () => {
        setColor("success");
        setFocused(false);
    };

    return {color, focused, setWarning, resetWarning};
}