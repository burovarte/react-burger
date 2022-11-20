import React, {useState, useEffect, FormEvent, SyntheticEvent} from "react";
import style from './profile.module.css';
import {Input, PasswordInput, EmailInput} from '@ya.praktikum/react-developer-burger-ui-components';
import {Link, Navigate, NavLink, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "../../utils/hooks";
import {updateUser, logout} from "../../services/action/authAction";
import {Button} from '../../utils/buttons'
import {TUserData} from "../../utils/types";

function Profile() {
    const {user} = useSelector((state) => state.authReducer);
    const [form, setValue] = useState<TUserData>({
        name: user ? user.name : "",
        email: user ? user.email : "",
        password: "",
    });
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
            <div className={style.nav + ' mr-15'}>
                <Link
                    to={{pathname: '/profile'}}
                    className={`${style.activeLink}  text text_type_main-medium`}
                >
                    Профиль
                </Link>
                <Link
                    to={{pathname: '/profile/orders'}}
                    className={`${style.link}  text text_type_main-medium`}
                >
                    История заказов
                </Link>
                <div
                    className={`${style.exitLink} text text_type_main-medium`}
                    onClick={Exit}
                >
                    Выход
                </div>
                <p className={`${style.text} text text_type_main-default mt-20`}>
                    В этом разделе вы можете изменить свои персональные данные
                </p>
            </div>
            <form className={`${style.form} mb-20`} onSubmit={onClick}>
                <div className={'mb-6'}>
                    <Input
                        value={form.name || ''}
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
