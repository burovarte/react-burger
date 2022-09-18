import React, {useCallback, useState} from "react";
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import style from './forgot-password.module.css';
import {baseUrl} from "../../utils/base-url";
import {checkResponse} from "../../utils/check-response";

function ForgotPassword() {
    const [form, setValue] = useState({email: ''})

    const onChange = (e) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const history = useHistory();

    const onSubmit = useCallback((e) => {
            const url = `${baseUrl}password-reset.`;
            fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: form.email,
                }),
            }).then(checkResponse)
                .then((data) => {
                    if (data.success) {
                        history.replace({pathname: '/reset-password'});
                    }
                })
                .catch((err) => {
                    console.log(err.message);
                });
        },
        [form, history]
    )

    return (
        <div className={style.main}>
            <form className={`${style.form} mb-20`} onSumbit={onSubmit}>
                <h1 сlassName={'text text_type_main-large mb-6'}>
                    Восстановление пароля
                </h1>
                <div className={'mb-6'}>
                    <EmailInput value={form.email} name={'email'} onChange={onChange} placeholder='Укажите e-mail'/>
                </div>
                <Button type='primary'>Восстановить</Button>
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