import React, {FC, ReactNode} from 'react';
import {TOrderRow} from "../../services/action/wsAction";
import {useSelector} from "../../utils/hooks";
import {Ingredient} from "../../utils/types";
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './order.module.css';
import {useLocation, useNavigate} from "react-router-dom";
import timecard from '../../utils/time'

interface OrderProps {
    data: TOrderRow
}

const Order: FC<OrderProps> = ({data}) => {

    const ingredientsData = useSelector((store) => store.mainReducer.ingredients);

    let ingredients: Array<Ingredient> = [];

    data.ingredients.forEach((el) => {
        const indexOfIngredient = ingredientsData.findIndex(
            (item: { _id: string; }) => item._id === el
        );
        if (indexOfIngredient >= 0) {
            ingredients.push(ingredientsData[indexOfIngredient]);
        }
    });

    let price = 0;

    for (let item of ingredients) {
        if (item) {
            price = price + (item.type === 'bun' ? item.price * 2 : item.price);
        }
    }
    const navigate = useNavigate();
    const location = useLocation()

    function onClick() {
        navigate(`/feed/${data.number}`, {
            state: {from: location.pathname, background: location},
        });
    }


    return (
        <div className={`${style.order} pt-6 pr-6 pb-6 pl-6 mr-2`}
             onClick={onClick}>
            <div className={style.number}>
                <p className={'text text_type_digits-default'}>{'#' + String(data.number).padStart(6, '0')}</p>
                <p className={'text text_type_main-default'}>
                    {timecard(data)}
                </p>
            </div>
            <p className={`${style.burgerName}  text text_type_main-medium mt-6`}>
                {data.name}
            </p>
            <div className={`${style.orderContent}  mt-6`}>
                <div className={style.ingredients}>
                    {ingredients.map((el, index) => {
                        if (!el || index > 5) {
                            return null;
                        }
                        let count = '';
                        if (index === 5 && ingredients.length > 6) {
                            count = '+' + (ingredients.length - 5);
                        }
                        return (
                            <div className={style.image} key={index.toString()}>
                                <img alt="Фото" src={el.image_mobile} className={style.circles}></img>
                                {count && (
                                    <p className={'text text_type_main-default'}>
                                        {count}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className={style.price}>
                    <p className={'text text_type_digits-default mr-2'}>{price}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </div>
    )
}

export default Order;