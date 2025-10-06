import axios from "axios"
import { GET_TOKEN_URL_API, USER_REGISTER_API } from "../../../../packages/api/src/auth/auth_apis"
import { type onSubmitProps } from "../../SignIn"
import { MAIN_PAGE_URL } from "../../../../constants/app/constants";

export const onSubmitSignUp = ({ e, props }: { e: React.FormEvent<HTMLFormElement>; props: onSubmitProps }) => {
    e.preventDefault();
    axios.post(USER_REGISTER_API, {
        email: props.fields.email,
        password: props.fields.password,
        username: props.fields.username,
        first_name: props.fields.firstName,
    })
    .then((response) => {
        if (response.status === 201){
            axios.post(GET_TOKEN_URL_API, {
                email: props.fields.email,
                username: props.fields.username,
                password: props.fields.password
            })
            .then((response) => {
                localStorage.setItem("access", response.data.access);
                localStorage.setItem("refresh", response.data.refresh);
                if (localStorage.getItem("access") && localStorage.getItem("refresh")) {
                    props.resetWarning();
                    props.navigate(MAIN_PAGE_URL);
                }
            })
            .catch((error) => {
                props.setWarning();
                if (error) {
                    props.showAlert("Something went wrong during sign in, please try again!");
                    console.log(error.response?.data);
                }
            })
        }
    })
    .catch((error) => {
        props.setWarning();
        if (error) {
            props.showAlert("Something went wrong during sign up, please try again!");
            console.log(error.response?.data);
        }
    })
}