import React, {useState, useEffect, FormEvent, SyntheticEvent} from "react";
import style from './profile.module.css';
import {Input, PasswordInput, EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Navigate, NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "../../utils/hooks";
import {updateUser, logout} from "../../services/action/authAction";
import {Button} from '../../utils/buttons'
import {TUserData} from "../../utils/types";
// import {useDispatch, useSelector} from "react-redux" ;


function Profile() {
    const user = useSelector((store) => store.authReducer.user)
    const [form, setValue] = useState<TUserData>({name: '',
        password: '',
        email: '',});
    const [changed, setChanged] = useState(false);
    const auth = useSelector((store) => store.authReducer.isAuthorized);
    const dispatch = useDispatch();

    console.log("получаю данные пользователя из стора : ", user)
    console.log("получаю данные пользователя из стейт: ", form)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({...form, [e.target.name]: e.target.value});
        setChanged(true);
    };

    function onClick(e: FormEvent) {
        e.preventDefault();
        if (changed) dispatch(updateUser(form));
    }

    useEffect(() => {
        setValue(user);
    }, []);

    const cancelClick = (e: SyntheticEvent<Element, Event>) => {
        setValue(user);
        setChanged(false);
    }

    function Exit() {
        dispatch(logout());
    }

    console.log("страница профайла: ", auth)

    return (
        <div className={style.main}>
            <h1>{form.name}</h1>
            <div className={`${style.menu} mr-15`}>
                <NavLink
                    to={{pathname: '/profile'}}
                    className={`${style.link} text text_type_main-medium `}
                    /* @ts-ignore */
                    activeclassname={`${style.activeLink} text text_type_main-medium `}
                >
                    Профиль
                </NavLink>
                <NavLink
                    to={{pathname: '/profile/orders'}}
                    className={`${style.link} text text_type_main-medium `}
                    /* @ts-ignore */
                    activeclassname={`${style.activeLink} text text_type_main-medium `}
                >
                    История заказов
                </NavLink>
                <div
                    className={`${style.exit} text text_type_main-medium `}
                    onClick={Exit}
                >
                    Выход
                </div>
                <p
                    className={`${style.text} text text_type_main-medium mt-20`}
                >
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            <form className={`${style.form} mb-20`} onSubmit={onClick}>
                <div className={'mb-6'}>
                    <Input
                        value={form.name|| '' }
                        name='name'
                        onChange={onChange}
                        placeholder='Имя'/>
                </div>
                <div className={'mb-6'}>
                    <EmailInput value={form.email || ''} name={'email'} onChange={onChange}/>
                </div>
                <div className={'mb-6'}>
                    <PasswordInput value={form.password || ''} name={'password'} onChange={onChange}/>
                </div>
                <div className={changed ? style.active : style.unactive}>
                    <Button type="primary" size="medium">
                        Сохранить
                    </Button>
                    <Button onClick={cancelClick} type="secondary">
                        Отмена
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Profile;
