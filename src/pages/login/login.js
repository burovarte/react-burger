import React, {useState} from "react";
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";
import style from './login.module.css';

function Login() {
    const [form, setValue] = useState({email: '', password: ''})

    const onChange = (e) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    return (
        <div className={style.main}>
            <form className={`${style.form} mb-20`}>
                <h1 сlassName={'text text_type_main-large mb-6'}>
                    Вход
                </h1>
                <div className={'mb-6'}>
                    <EmailInput value={form.email} name={'email'} onChange={onChange}/>
                </div>
                <div className={'mb-6'}>
                    <PasswordInput value={form.password} name={'password'} onChange={onChange}/>
                </div>
                <Button type='primary'>Войти</Button>
            </form>
            <div className={style.line}>
                <p сlassName={` text text_type_main-default text_color_inactive `}>
                    Вы новый пользователь?
                </p>
                <Link to='/register'
                      className={`${style.link} text text_type_main-default ml-2`}>Зарегистрироваться</Link>
            </div>
            <div className={`${style.line} mt-4`}>
                <p сlassName={'text text_type_main-default text_color_inactive'}>Забыли пароль?
                </p>
                <Link to='/forgot-password' className={`${style.link} text text_type_main-default ml-2`}>Восстановить
                    пароль</Link>
            </div>
        </div>
    )
}

export default Login;