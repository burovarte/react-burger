import {baseUrl} from './base-url';
import {checkResponse} from "./check-response";

export const forgotPassword = (email: string) => {
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

export const resetPassword = (password: string, code:string) => {
    return fetch(`${baseUrl}password-reset/reset`, {
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