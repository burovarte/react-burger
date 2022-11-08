import {LOGIN_USER, REGISTER_USER, LOGOUT_USER, CHEK_TOKEN} from '../action';
import {TUserData} from "../../utils/types";
import {TAuthActions} from "../action/authAction";

type TinitialState = {
    user: TUserData;
    accessToken: string;
    isAuthorized: boolean;
}

const initialState: TinitialState = {
    user: {
        email: '',
        password: '',
    },
    accessToken: '',
    isAuthorized: false,
};

export const authReducer = (state = initialState, action: TAuthActions): TinitialState => {
    switch (action.type) {

        case LOGIN_USER:
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
            return <TinitialState>{
                ...state,
                user: {},
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