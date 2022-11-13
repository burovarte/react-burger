import React, {FC, useEffect, useState} from "react";
import style from './feed.module.css';
import AllOrders from "../../components/allOrders/allOrders";
import {useDispatch, useSelector} from "../../utils/hooks";
import {DELETE_DETAILS, WS_CONNECTION_CLOSE, WS_CONNECTION_START} from "../../services/action";
import OrdersInfo from "../../components/ordersInfo/ordersInfo";
import {useLocation, useNavigate} from "react-router-dom";


function Feed() {
    const wsApiOrderURL = 'wss://norma.nomoreparties.space/orders/all'
    const dataAllOrders = useSelector((store) => store.wsReducer.messages);
    console.log('все заказы:', dataAllOrders)

    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch({
            type: WS_CONNECTION_START,
            payload: wsApiOrderURL,
        });
        return () => {
            // @ts-ignore
            dispatch({
                type: WS_CONNECTION_CLOSE,
            });
        };
    }, [dispatch]);


    return (
        <div className={style.main}>
            <div className={style.feed}>
                <h1>Лента заказов</h1>
                <AllOrders dataAllOrders={dataAllOrders}/>
            </div>
            <OrdersInfo dataAllOrders={dataAllOrders} />
        </div>
    )

}

export default Feed