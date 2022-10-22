import React, {useState, useEffect, useCallback, FC} from "react";
import {EmailInput, PasswordInput, Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation, useNavigate, Navigate} from "react-router-dom";
import style from './register.module.css';
import {register} from "../../services/action/authAction";
import {useSelector, useDispatch} from 'react-redux';

type RegisterProps = {
    state?: {
        from: Location;
    }
}

const Register: FC<RegisterProps> = (props) => {
    const [form, setValue] = useState({email: '', password: '', name: ''})
    const auth = useSelector<any>((store) => store.authReducer.isAuthorized);
    const navigate = useNavigate()
    const dispatch = useDispatch<any>();
    const location = useLocation();
    const from = location.state?.from || "/";
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
    };
    const registerNewUser = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            dispatch(register(form));
        },
        [form]
    );

    useEffect(() => {
        if (auth) {
            navigate({pathname: '/'});
        }
    }, [auth]);

    if (auth) {
        return (
            <Navigate to={'/profile'}/>
        );
    }

    return (
        <div className={style.main}>
            <form className={`${style.form} mb-20`} onSubmit={registerNewUser}>
                <h1 className={'text text_type_main-large mb-6'}>
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
                {/* @ts-ignore */}
                <Button type='primary'>Зарегистрироваться</Button>
            </form>
            <div className={style.line}>
                <p className={` text text_type_main-default text_color_inactive `}>
                    Уже зарегистрированы?
                </p>
                <Link to='/login'
                      className={`${style.link} text text_type_main-default ml-2`}>Войти</Link>
            </div>
        </div>
    )
}

export default Register;