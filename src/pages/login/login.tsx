import React, {useState, useCallback} from "react";
import {EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, Navigate} from 'react-router-dom';
import style from './login.module.css';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../services/action/authAction";
import {Button} from '../../utils/buttons'


function Login() {
    const [form, setValue] = useState({email: '', password: ''})

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };

    const dispatch = useDispatch<any>();
    const auth = useSelector((store: any) => store.authReducer.isAuthorized);
    const location = useLocation();

    const loginUser = useCallback(
        (e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(login(form));
        },
        [form, dispatch]
    );
    if (auth) {
        return (
            <Navigate to={location.state?.from || '/profile'}/>
        );
    }

    return (
        <div className={style.main}>
            <form className={`${style.form} mb-20`} onSubmit={loginUser}>
                <h1 className={'text text_type_main-large mb-6'}>
                    Вход
                </h1>
                <div className={'mb-6'}>
                    <EmailInput value={form.email} name={'email'} onChange={onChange}/>
                </div>
                <div className={'mb-6'}>
                    <PasswordInput
                        value={form.password}
                        name={'password'}
                        onChange={onChange}/>
                </div>
                <Button type='primary'>Войти</Button>
            </form>
            <div className={style.line}>
                <p className={` text text_type_main-default text_color_inactive `}>
                    Вы новый пользователь?
                </p>
                <Link to='/register'
                      className={`${style.link} text text_type_main-default ml-2`}>Зарегистрироваться</Link>
            </div>
            <div className={`${style.line} mt-4`}>
                <p className={'text text_type_main-default text_color_inactive'}>Забыли пароль?
                </p>
                <Link to='/forgot-password' className={`${style.link} text text_type_main-default ml-2`}>Восстановить
                    пароль</Link>
            </div>
        </div>
    )
}

export default Login;