import {LOGIN_USER, REGISTER_USER, LOGOUT_USER, CHEK_TOKEN} from './index';

import {baseUrl} from '../../utils/base-url';
import {checkResponse} from "../../utils/check-response";

export function login(data) {
    const url = baseUrl
    return function (dispatch) {
        fetch(`${url}auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        })
            .then(checkResponse)
            .then((answer) => {
                if (answer.success) {
                    setCookie('accessToken', answer.accessToken);
                    localStorage.setItem('refreshToken', answer.refreshToken);
                    dispatch({
                        type: LOGIN_USER,
                        data: answer,
                    });
                } else {
                    return Promise.reject(`Ошибка данных`);
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    };
}


export function register(data) {
    const url = baseUrl
    return function (dispatch) {
        fetch(`${url}auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                name: data.name,
            }),
        })
            .then(checkResponse)
            .then((answer) => {
                if (answer.success) {
                    setCookie('accessToken', answer.accessToken);
                    localStorage.setItem('refreshToken', answer.refreshToken);
                    dispatch({
                        type: REGISTER_USER,
                        data: answer,
                    });
                } else {
                    return Promise.reject(`Ошибка данных`);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
}


export function logout(data) {
    const url = baseUrl
    return function (dispatch) {
        fetch(`${url}auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken'),
            }),
        })
            .then(checkResponse)
            .then((answer) => {
                if (answer.success) {
                    deleteCookie('accessToken');
                    localStorage.removeItem('refreshToken');
                    dispatch({
                        type: LOGOUT_USER,
                    });
                } else {
                    return Promise.reject(`Ошибка данных`);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
}


export function getUser() {
    const url = baseUrl
    return function (dispatch) {
        fetchWithRefresh(`${url}auth/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: getCookie('accessToken'),
            },
        })
            .then((answer) => {
                if (answer.success) {
                    dispatch({
                        type: CHEK_TOKEN,
                        data: answer,
                    });
                } else {
                    return Promise.reject(`Ошибка данных`);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
}


export function updateUser(data) {
    const url = baseUrl
    return function (dispatch) {
        fetchWithRefresh(`${url}auth/user`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: getCookie('accessToken'),
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
            }),
        })
            .then((answer) => {
                if (answer.success) {
                    dispatch({
                        type: CHEK_TOKEN,
                        data: answer,
                    });
                } else {
                    return Promise.reject(`Ошибка данных`);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
}


export const refreshToken = () => {
    const url = baseUrl
    return fetch(`${url}auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken'),
        }),
    }).then(checkResponse);
};

export const fetchWithRefresh = async (url, options) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err) {
        if (err.message === 'jwt expired') {
            const refreshData = await refreshToken();
            localStorage.setItem('refreshToken', refreshData.refreshToken);
            setCookie('accessToken', refreshData.accessToken);
            options.headers.authorization = refreshData.accessToken;
            const res = await fetch(url, options);
            return await checkResponse(res);
        } else {
            return Promise.reject(err);
        }
    }
};

export function setCookie(name, value, props) {
    props = props || {};
    props = {
        path: '/',
        expires: 35900,
        ...props,
    };
    let exp = props.expires;
    if (typeof exp == 'number' && exp) {
        const d = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
}

export function getCookie(name) {
    const matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)'
        )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, '', {
        'max-age': -1,
    });
}