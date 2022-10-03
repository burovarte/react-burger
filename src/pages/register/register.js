import React, {useState, useEffect, useCallback} from "react";
import {EmailInput, PasswordInput, Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, Redirect, useLocation, useNavigate, Navigate} from "react-router-dom";
import style from './register.module.css';
import {register} from "../../services/action/authAction";
import {useSelector, useDispatch} from 'react-redux';


function Register(props) {
    const [form, setValue] = useState({email: '', password: '', name: ''})
    const auth = useSelector((store) => store.authReducer.isAuthorized);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();
    const from = location.state?.from || "/";
    const onChange = (e) => {
        setValue({...form, [e.target.name]: e.target.value});
    };
    const registerNewUser = useCallback(
        (e) => {
            e.preventDefault();
            dispatch(register(form));
        },
        [form]
    );

    useEffect(() => {
        if (auth) {
            navigate.replace({pathname: '/'});
        }
    }, [auth]);

    if (auth) {
        return (
            <Navigate to={from} replace/>
        );
    }

    return (
        <div className={style.main}>
            <form className={`${style.form} mb-20`} onSubmit={registerNewUser}>
                <h1 сlassName={'text text_type_main-large mb-6'}>
                    Регистрация
                </h1>
                <div className={'mb-6'}>
                    <Input
                        placeholder="Имя"
                        value={form.name}
                        name="name"
                        onChange={onChange}
                    />
                </div>
                <div className={'mb-6'}>
                    <EmailInput value={form.email} name={'email'} onChange={onChange}/>
                </div>
                <div className={'mb-6'}>
                    <PasswordInput value={form.password} name={'password'} onChange={onChange}/>
                </div>
                <Button type='primary'>Зарегистрироваться</Button>
            </form>
            <div className={style.line}>
                <p сlassName={` text text_type_main-default text_color_inactive `}>
                    Уже зарегистрированы?
                </p>
                <Link to='/login'
                      className={`${style.link} text text_type_main-default ml-2`}>Войти</Link>
            </div>
        </div>
    )
}

export default Register;