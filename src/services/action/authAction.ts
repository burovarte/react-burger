import {LOGIN_USER, REGISTER_USER, LOGOUT_USER, CHEK_TOKEN} from './index';
import {baseUrl} from '../../utils/base-url';
import {checkResponse} from "../../utils/check-response";
import {TUserData, AppDispatch, AppThunkAction} from "../../utils/types";
import {Form} from "react-router-dom";

export interface ILoginUserAction {
    readonly type: typeof LOGIN_USER;
    readonly data: TUserData;
}
export interface IRegisterUserAction {
    readonly type: typeof REGISTER_USER;
    readonly data: TUserData;
}
export interface ILogoutUserAction {
    readonly type: typeof LOGOUT_USER;
}
export interface IChekTokenAction {
    readonly type: typeof CHEK_TOKEN;
    readonly data: TUserData;
}


export type TAuthActions =
    | ILoginUserAction
    | IRegisterUserAction
    | ILogoutUserAction
    | IChekTokenAction;

export function login(data:TUserData):AppThunkAction {
    return function (dispatch:AppDispatch) {
        fetch(`${baseUrl}auth/login`, {
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


export function register(data: TUserData): AppThunkAction {
    return function (dispatch: AppDispatch) {
        fetch(`${baseUrl}auth/register`, {
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


export function logout(): AppThunkAction {
    return function (dispatch: AppDispatch) {
        fetch(`${baseUrl}auth/logout`, {
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


export function getUser():AppThunkAction {
    return function (dispatch: AppDispatch) {
        fetchWithRefresh(`${baseUrl}auth/user`, {
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


export function updateUser(data:TUserData): AppThunkAction {
    return function (dispatch: AppDispatch) {
        fetchWithRefresh(`${baseUrl}auth/user`, {
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
    return fetch(`${baseUrl}auth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken'),
        }),
    }).then(checkResponse);
};

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

type fetchWithRefreshOptions = Overwrite<RequestInit, {headers: Record<string, string>  }>;


export const fetchWithRefresh = async (url: string, options:fetchWithRefreshOptions) => {
    try {
        const res = await fetch(url, options);
        return await checkResponse(res);
    } catch (err: any) {
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

export function setCookie(name: string, value: string, props: any = {}) {
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

export function getCookie(name:string) {
    const matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)'
        )
    );
    return matches ? decodeURIComponent(matches[1]) : '';
}

function deleteCookie(name: string) {
    setCookie(name, '', {
        'max-age': -1,
    });
}