import React, {useCallback, useState} from "react";
import {EmailInput, PasswordInput, Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import style from './reset-password.css';
import {baseUrl} from "../../utils/base-url";
import {checkResponse} from "../../utils/check-response";

function ResetPassword() {
    const [form, setValue] = useState({password: '', token: ''})

    const onChange = (e) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const navigate = useNavigate()


    const onSubmit = useCallback((e) => {
            const url = `${baseUrl}password-reset/reset`;
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: form.password,
                    token: form.token
                }),
            }).then(checkResponse)
                .then((data) => {
                    if (data.success) {
                        navigate.replace({pathname: '/'});
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        [form, navigate]
    )

    return (
        <div className={style.main}>
            <form className={`${style.form} mb-20`} onSumbit={onSubmit}>
                <h1 сlassName={'text text_type_main-large mb-6'}>
                    Восстановление пароля
                </h1>
                <div className={'mb-6'}>
                    <PasswordInput
                        value={form.password}
                        name={'password'}
                        onChange={onChange}
                        placeholder='Введите новый пароль'/>
                </div>
                <div className={'mb-6'}>
                    <Input
                        value={form.token}
                        name={'code'}
                        onChange={onChange}
                        placeholder='Введите код из письма'/>
                </div>
                <Button type='primary'>Сохранить</Button>
            </form>
            <div className={style.line}>
                <p сlassName={` text text_type_main-default text_color_inactive `}>
                    Вспомнили пароль?
                </p>
                <Link to='/login'
                      className={`${style.link} text text_type_main-default ml-2`}>Войти</Link>
            </div>
        </div>
    )
}

export default ResetPassword;