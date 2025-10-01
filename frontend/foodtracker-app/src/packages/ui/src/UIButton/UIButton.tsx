import { Button } from "@mui/material";

interface ButtonProps {
    buttonText: string,
    buttonVariant: "text" | "outlined" | "contained",
    required: boolean,
    buttonType?: "submit"
    onClickEvent?: React.MouseEventHandler<HTMLButtonElement>
}

export const UIButton = ({ buttonText, buttonVariant, required, buttonType, onClickEvent}: ButtonProps) => {
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
        type={buttonType}
        sx = {
            buttonStyle({ required })
        }
        onClick={onClickEvent}
        >
            {buttonText}
        </Button>
    )
}