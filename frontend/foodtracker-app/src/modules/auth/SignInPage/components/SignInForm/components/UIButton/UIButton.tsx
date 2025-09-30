import { Button } from "@mui/material";

interface ButtonProps {
    buttonText: string,
    buttonVariant: "text" | "outlined" | "contained",
    required: boolean
}

export const UIButton = ({ buttonText, buttonVariant, required}: ButtonProps) => {
    interface buttonStyleProps {
        required: boolean
    }

    const buttonStyle = ({ required }: buttonStyleProps) => {
        const buttonStyle = (required) ?
        {backgroundColor: "green"} : 
        {color: "green", borderColor: "green"};
        
        return buttonStyle;
    }

    return (
        <Button 
        variant={buttonVariant}
        fullWidth
        sx = {
            buttonStyle({ required })
        }
        >
            {buttonText}
        </Button>
    )
}