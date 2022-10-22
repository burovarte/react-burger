import React, {useCallback, useState} from "react";
import {PasswordInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate, Navigate, useLocation} from "react-router-dom";
import style from './reset-password.module.css'
import {resetPassword} from "../../utils/auth";
import {Button} from '../../utils/buttons'

function ResetPassword() {
    const [form, setValue] = useState({password: '', code: ''})
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const navigate = useNavigate()

    const passwordCreate = useCallback(
        (e: React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();
            resetPassword(form.password, form.code)
                .then((data) => {
                    if (data.success) {
                        navigate({pathname: '/'});
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        [form, navigate]
    );

    const location = useLocation();

    let locationState = location.state;

    if (locationState !== "/forgot-password") {
        return <Navigate to="/" replace/>;
    }

    return (

        <div className={style.main}>
            <form className={`${style.form} mb-20`} onSubmit={passwordCreate}>
                <h1 className={'text text_type_main-large mb-6'}>
                    Восстановление пароля
                </h1>
                <div className={'mb-6'}>
                    <PasswordInput
                        value={form.password}
                        name={'password'}
                        onChange={onChange}
                       />
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
                <p className={` text text_type_main-default text_color_inactive `}>
                    Вспомнили пароль?
                </p>
                <Link to='/login'
                      className={`${style.link} text text_type_main-default ml-2`}>Войти</Link>
            </div>
        </div>
    )
}

export default ResetPassword;