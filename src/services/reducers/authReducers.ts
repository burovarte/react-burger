import {LOGIN_USER, REGISTER_USER, LOGOUT_USER, CHEK_TOKEN} from '../action';
import {TUserData} from "../../utils/types";
import {getCookie, TAuthActions} from "../action/authAction";

type TinitialState = {
    user: TUserData;
    accessToken: string;
    isAuthorized: boolean;
}

export const initialState: TinitialState = {
    accessToken: '',
    isAuthorized: Boolean(getCookie("accessToken")),
    user: {
        name: '',
        email: '',
        password: '',
    },

};

export const authReducer = (state = initialState, action: TAuthActions): TinitialState => {
    switch (action.type) {

        case LOGIN_USER:
            console.log('action_login', action)
            return {
                ...state,
                user: action.data,
                isAuthorized: true,
            };

        case REGISTER_USER:
            return {
                ...state,
                user: action.data,
                isAuthorized: true,
            };

        case LOGOUT_USER:
            return {
                ...state,
                user: {
                    email: '',
                    name: "",
                    password: '',
                },
                isAuthorized: false,
            };

        case CHEK_TOKEN:
            return {
                ...state,
                user: action.data,
                isAuthorized: true,
            };

        default:
            return state;
    }
};