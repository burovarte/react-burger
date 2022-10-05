import React, {useCallback, useState} from "react";
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate} from "react-router-dom";
import style from './forgot-password.module.css';
import {baseUrl} from "../../utils/base-url";
import {checkResponse} from "../../utils/check-response";
import {useSelector} from "react-redux";
import { forgotPassword } from '../../utils/auth'
import {Navigate} from "react-router-dom";


function ForgotPassword() {
    const [form, setValue] = useState({email: ''})
    const navigate = useNavigate()
    const auth = useSelector((store) => store.authReducer.isAuthorized);
    const location = useLocation()
    const onChange = (e) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

console.log(location.pathname)
    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            forgotPassword(form.email)
                .then((data) => {
                    if (data.success) {
                        navigate('/reset-password', {state: location.pathname})
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        [form, navigate]
    );


    if (auth) {
        return <Navigate to={'/'} />;
    }

    return (
        <div className={style.main}>
            <form className={`${style.form} mb-20`}>
                <h1 сlassName={'text text_type_main-large mb-6'}>
                    Восстановление пароля
                </h1>
                <div className={'mb-6'}>
                    <EmailInput value={form.email} name={'email'} onChange={onChange} placeholder='Укажите e-mail'/>
                </div>
                <Button type='primary' onClick={onSubmit}>Восстановить</Button>
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

export default ForgotPassword;