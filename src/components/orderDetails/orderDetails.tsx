import React, { useEffect, useState } from 'react';





import styles from './orderDetails.module.css';
import clsx from 'clsx';

import { useSelector } from '../../utils/hooks';
// import { TItem, TOrderRow } from '../../utils/types';
import {getOrder} from "../../utils/auth";

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {Ingredient} from "../burger-constructor/burger-constructor";
import {useNavigate, useParams} from "react-router-dom";

function OrderDetails() {
    let { id } = useParams<{ id?: string }>();
    const [item, setItem] = useState<any>();
    const items = useSelector((store) => store.wsReducer.messages.orders);
    const ingredientsData = useSelector(
        (store) => store.mainReducer.ingredients
    );

    const history = useNavigate();

    let header = true;
    // if (history.action === 'PUSH' || history.action === 'REPLACE') {
    //     header = false;
    // }

    useEffect(() => {
        const foundedOrder = items.find(
            (el: any) => el.number === Number(id)
        );

        if (foundedOrder) {
            // @ts-ignore
            setItem(foundedOrder);
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


    let ingredientsArray: Array<any> = [];
    item.ingredients.forEach((el: string) => {

        const indexOfIngredient = ingredientsData.findIndex(
            (item: { _id: string; }) => item._id === el
        );

        const ingredientsArrayEntrance = ingredientsArray.findIndex(
            (item: { _id: string; }) => item._id === el
        );
        console.log(ingredientsArrayEntrance);

        if (indexOfIngredient >= 0 && ingredientsArrayEntrance === -1) {
            (ingredientsData[indexOfIngredient].type === 'bun' ?
                ingredientsData[indexOfIngredient].count= 2 :
                ingredientsData[indexOfIngredient].count = item.ingredients.filter((id: string) => id === el ).length);
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
        <div className={styles.main}>
            {header && <div className="mt-25"></div>}
            <p className={clsx(styles.number, ' text text_type_digits-default')}>
                {'#' + String(item.number).padStart(6, '0')}
            </p>
            <p className={clsx(styles.burgerName, ' text text_type_main-medium mt-6 mb-2')}>
                {item.name}
            </p>
            <p className={clsx(styles.burgerStatus, ' text text_type_main-small text_color_inactive')}>
                {statusName}
            </p>
            <p className={clsx(styles.burgerName, ' text text_type_main-medium mt-15 mb-6')}>
                Состав:
            </p>
            <div className={clsx(styles.list,' mb-10 pr-6')}>
                {ingredientsArray.map((el, index) => {
                    if (!el) {
                        return null;
                    }
                    const currentPrice = (el.count +' x ' + el.price);
                    return (
                        <div key={el._id} className={styles.row}>
                            <img alt="Фото" src={el.image_mobile} className={clsx(styles.image, ' mr-6')}></img>
                            <p className={clsx(styles.ingredientName, ' text text_type_main-default mr-4')}>
                                {el.name}
                            </p>
                            <p className={clsx(styles.remains,' text text_type_main-default mr-2')}>
                                {currentPrice}
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                    );
                })}
            </div>
            <div className={clsx(styles.footer,' mb-10')}>

                <div className={styles.price}>
                    <p className={'text text_type_digits-default mr-2'}>{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;