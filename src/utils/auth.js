import {baseUrl} from './base-url';
import {checkResponse} from "./check-response";
const authURL = new URL('auth/', baseUrl );


const forgotPasswordURL = new URL('password-reset/', baseUrl );
const resetPasswordURL = new URL('reset', forgotPasswordURL );

console.log(forgotPasswordURL)

export const forgotPassword = (email) => {
    console.log(forgotPasswordURL)
    return fetch(`${baseUrl}password-reset`, {
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
    return fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
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