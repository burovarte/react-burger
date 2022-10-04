import React, {useCallback, useState} from "react";
import {EmailInput, PasswordInput, Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import style from './reset-password.css';
import {baseUrl} from "../../utils/base-url";
import {checkResponse} from "../../utils/check-response";
import {resetPassword} from "../../utils/auth";

function ResetPassword() {
    const [form, setValue] = useState({ code: '', password: '' });
    const navigate = useNavigate()

    let permission = false;
    if (navigate.action === 'PUSH' || navigate.action === 'REPLACE') {
        if (navigate.location.pathname === '/reset-password') {

            permission = true;
        }
    }
    if (!permission) {
        navigate.replace({ pathname: '/' });
    }
    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };

    const passwordCreate = useCallback(
        (e) => {
            e.preventDefault();
            resetPassword(form.password, form.code)
                .then((data) => {
                    if (data.success) {
                        navigate.replace({ pathname: '/' });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        [form, navigate]
    );

    return (
        <div className={style.main}>
            <form className={`${style.form} mb-20`} onSumbit={passwordCreate}>
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
                        value={form.code}
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