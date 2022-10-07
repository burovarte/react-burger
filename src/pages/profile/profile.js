import React, {useState, useEffect} from "react";
import style from './profile.module.css';
import {Input, PasswordInput, EmailInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import {NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {updateUser, logout} from "../../services/action/authAction";

function Profile() {
    const [form, setValue] = useState({});
    const [changed, setChanged] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector((store) => store.authReducer.user)

    const onChange = (e) => {
        setValue({...form, [e.target.name]: e.target.value});
        setChanged(true);
    };

    function onClick(e) {
        e.preventDefault();
        if (changed) dispatch(updateUser(form));
    }
    useEffect(() => {
        setValue(user);
    }, [user]);

    const cancelClick = (e) => {
        setValue(user);
        setChanged(false);
    };

    function Exit(e) {
        dispatch(logout(form));
    }

    return (
        <div className={style.main}>
            <div className={`${style.menu} mr-15`}>
                <NavLink
                    to={{pathname: '/profile'}}
                    className={`${style.link} text text_type_main-medium `}
                    activeclassname={`${style.activeLink} text text_type_main-medium `}
                >
                    Профиль
                </NavLink>
                <NavLink
                    to={{pathname: '/profile/orders'}}
                    className={`${style.link} text text_type_main-medium `}
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
                        value={form.name || ''}
                        name={'name'}
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