import React, {useEffect, MouseEvent, ReactNode} from 'react';
import style from './profileOrders.module.css'
import {Link, useLocation} from 'react-router-dom';
import {useSelector, useDispatch} from '../../utils/hooks';
import {logout} from '../../services/action/authAction'
import {WS_CONNECTION_START, WS_CONNECTION_CLOSE,} from '../../services/action';
import {getCookie} from '../../services/action/authAction'
import PersonalOrders from "../../components/personalOrders/personalOrders";

function ProfileOrders () {
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.wsReducer.messages);
    const wsUserApiOrderURL = 'wss://norma.nomoreparties.space/orders'
    let location = useLocation();
    function Exit(e: MouseEvent) {
        dispatch(logout());
    }

    useEffect(() => {
        const accessToken = getCookie('accessToken').replace('Bearer ', '');
        dispatch({
            type: WS_CONNECTION_START,
            payload: `${wsUserApiOrderURL}?token=${accessToken}`,
        });
        return () => {
            dispatch({
                type: WS_CONNECTION_CLOSE,
                payload: null
            });
        };
    }, [dispatch]);

    return (
        <div className={style.main}>
            <div className={style.nav + ' mr-15'}>
                <Link
                    to={{pathname: '/profile'}}
                    className={`${style.link}  text text_type_main-medium`}
                >
                    Профиль
                </Link>
                <Link
                    to={{pathname: '/profile/orders'}}
                    className={`${style.activeLink}  text text_type_main-medium`}
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
                    В этом разделе вы можете просмотреть свою историю заказов
                </p>
            </div>
            <div className={style.form + ' mb-20'}>
                <PersonalOrders data={messages}/>
            </div>
        </div>
    );
};

export default ProfileOrders;