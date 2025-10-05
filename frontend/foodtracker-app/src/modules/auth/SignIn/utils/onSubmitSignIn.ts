import axios from "axios";
import { GET_TOKEN_URL_API } from "../../../../packages/api/src/auth/auth_apis";
import { MAIN_PAGE_URL } from "../../../../constants/app/constants";
import type { useNavigate } from "react-router-dom";

export interface APIFields {
    email: string;
    password: string;
    username?: string;
    firstName?: string;
}

export interface onSubmitProps {
    fields: APIFields;
    setWarning: () => void;
    resetWarning: () => void;
    showAlert: (msg: string) => void;
    navigate: ReturnType<typeof useNavigate>;
}

export const onSubmitSignIn = ({ e, props }: { e: React.FormEvent<HTMLFormElement>; props: onSubmitProps }) => {
    e.preventDefault();
    // email: test_admin@example.com
    // password: 123456

    // user2@example.com
    // User2123

    // user3@example.com
    // User3123

    axios.post(GET_TOKEN_URL_API, {
        email: props.fields.email,
        password: props.fields.password
    })
    .then((response) => {
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        if (localStorage.getItem("access") && localStorage.getItem("refresh")){
            props.resetWarning();
            props.navigate(MAIN_PAGE_URL);
        }
    })
    .catch((error) => {
        props.setWarning();
        if (error.response) {
            /* NOTE: If server response with status code not 2xx */
            props.showAlert("Your email or password is wrong! Please try again!");
        }
        else if (error.request) {
            /* NOTE: If request was done but response were not given */
            props.showAlert("Something went wrong. Please try again!");
        }
        else {
            /* NOTE: Something happened while providing request */
            props.showAlert("Something went wrong. Please try again!");
        }
    });
}
