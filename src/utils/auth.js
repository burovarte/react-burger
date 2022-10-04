import {baseUrl} from './base-url';
import {checkResponse} from "./check-response";
const authURL = new URL('auth/', baseUrl );


const forgotPasswordURL = new URL('password-reset/', baseUrl );
const resetPasswordURL = new URL('reset', forgotPasswordURL );

export const forgotPassword = (email) => {
    return fetch(forgotPasswordURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
        }),
    }).then(checkResponse);
};

export const resetPassword = (password, code) => {
    return fetch(resetPasswordURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password: password,
            token: code,
        }),
    }).then(checkResponse);
};