import React, {useEffect, useState} from 'react';
import style from './orderDetails.module.css';
import {TOrderRow} from "../../services/action/wsAction";
import {useSelector} from '../../utils/hooks';
import {getOrder} from "../../utils/auth";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {useParams} from "react-router-dom";
import {Ingredient} from "../../utils/types";
import timecard from '../../utils/time'

function OrderDetails() {
    let {id} = useParams<{ id?: string }>();
    const [item, setItem] = useState<TOrderRow>();
    const items = useSelector((store) => store.wsReducer.messages.orders);
    const ingredientsData = useSelector(
        (store) => store.mainReducer.ingredients
    );


    let header = true;

    useEffect(() => {
        const order = items.find(
            (el: any) => el.number === Number(id)
        );

        if (order) {
            setItem(order);
        } else {
            getOrder(Number(id)).then((res) => {
                if (res.success) {
                    setItem(res.orders[0]);
                }
            });
        }
    }, [id, items]);

    if (!item) {
        return null;
    }


    let ingredientsArray: Array<Ingredient> = [];
    item.ingredients.forEach((el: string) => {

        const indexOfIngredient = ingredientsData.findIndex(
            (item: { _id: string; }) => item._id === el
        );

        const ingredientsArrayEntrance = ingredientsArray.findIndex(
            (item: { _id: string; }) => item._id === el
        );

        if (indexOfIngredient >= 0 && ingredientsArrayEntrance === -1) {
            (ingredientsData[indexOfIngredient].type === 'bun' ?
                ingredientsData[indexOfIngredient].count = 2 :
                ingredientsData[indexOfIngredient].count = item.ingredients.filter((id: string) => id === el).length);
            ingredientsArray.push(ingredientsData[indexOfIngredient]);
        }
    });

    let price = 0;

    for (let item of ingredientsArray) {
        if (item) {
            price = price + (item.type === 'bun' ? item.price * 2 : item.price);
        }
    }

    let statusName = '';
    switch (item.status) {
        case 'done':
            statusName = 'Выполнен';
            break;
        case 'created':
            statusName = 'Создан';
            break;
        case 'pending':
            statusName = 'Готовится';
            break;
    }

    return (
        <div className={style.main}>
            {header && <div className="mt-25"></div>}
            <p className={`${style.number} text text_type_digits-default`}>
                {'#' + String(item.number).padStart(6, '0')}
            </p>
            <p className={`${style.burgerName}  text text_type_main-medium mt-6 mb-2`}>
                {item.name}
            </p>
            <p className={`${style.burgerStatus} text text_type_main-small text_color_inactive`}>
                {statusName}
            </p>
            <p className={`${style.burgerName}  text text_type_main-medium mt-15 mb-6`}>
                Состав:
            </p>
            <div className={`${style.list}   mb-10 pr-6`}>
                {ingredientsArray.map((el, index) => {
                    if (!el) {
                        return null;
                    }
                    const price = (el.count + ' x ' + el.price);
                    return (
                        <div key={el._id} className={style.row}>
                            <img alt="Фото" src={el.image_mobile} className={`${style.image}  mr-6`}></img>
                            <p className={`${style.ingredientName}  text text_type_main-default mr-4`}>
                                {el.name}
                            </p>
                            <p className={`${style.remains}  text text_type_main-default mr-2`}>
                                {price}
                            </p>
                            <CurrencyIcon type="primary"/>
                        </div>
                    );
                })}
            </div>
            <div className={`${style.footer}  mb-10`}>
                <p className={'text text_type_main-default text_color_inactive'}>{timecard(item)}</p>
                <div className={style.price}>
                    <p className={'text text_type_digits-default mr-2'}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;