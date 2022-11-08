import React from "react";
import img from '../../image/img.svg';
import style from './order-details.module.css';
import {useSelector} from "../../utils/hooks";


function OrderDetails() {
    const orderNumber = useSelector((store) => store.mainReducer.order)
    return (
        <div className={`${style.mum} pt-30 pb-25`}>
            <div className="mb-8">
                <p className={`${style.order} text text_type_digits-large`}>
                    {orderNumber}
                </p>
            </div>
            <p className="text text_type_main-medium">Идентификатор заказа</p>
            <img className={`${style.img} mb-15 mt-15`} src={img} alt="Заказ принят"/>
            <p className="text text_type_main-default">Ваш заказ начали готовить</p>
            <div className="mt-2">
                <p className="text text_type_main-default text_color_inactive">
                    Дождитесь готовности на орбитальной станции
                </p>
            </div>
        </div>);
}

export default OrderDetails;