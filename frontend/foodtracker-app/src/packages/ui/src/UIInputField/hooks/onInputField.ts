import { type Dispatch, type SetStateAction } from "react";

interface onInputFieldProps {
    event: React.ChangeEvent<HTMLInputElement>
    setter: Dispatch<SetStateAction<string>>;
}

export const onInputField = ({ event, setter }: onInputFieldProps) => {
    setter(event.target.value);
}