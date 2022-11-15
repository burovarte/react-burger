import React, {FC} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import style from './personalOrder.module.css';
import {Ingredient} from "../burger-constructor/burger-constructor";
import {TOrderRow} from '../../services/action/wsAction';
import {useSelector} from '../../utils/hooks';
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

interface IOrderProps {
    data: TOrderRow;
}

const Order: FC<IOrderProps> = ({data}) => {
    const navigate = useNavigate();
    let location = useLocation();

    function onClick() {
        navigate(`/profile/orders/${data.number}`, {
            state: {from: location.pathname, background: location},
        });
    }

    const ingredientsData = useSelector(
        (store) => store.mainReducer.ingredients
    );

    let ingredientsArray: Array<Ingredient> = [];
    data.ingredients.forEach((el) => {
        const indexOfIngredient = ingredientsData.findIndex(
            (item: { _id: string; }) => item._id === el
        );
        if (indexOfIngredient >= 0) {
            ingredientsArray.push(ingredientsData[indexOfIngredient]);
        }
    });

    let price = 0;

    for (let item of ingredientsArray) {
        if (item) {
            price = price + (item.type === 'bun' ? item.price * 2 : item.price);
        }
    }

    return (
        <div
            className={`${style.order}   pt-6 pr-6 pb-6 pl-6 mr-2`}
            onClick={onClick}
        >
            <div className={style.number}>
                <p className={'text text_type_digits-default'}>{'#' + String(data.number).padStart(6, '0')}</p>
            </div>
            <p className={`${style.burgerName}  text text_type_main-medium mt-6`}>
                {data.name}
            </p>
            <div className={`${style.orderContent}  mt-6`}>
                <div className={style.ingredients}>
                    {ingredientsArray.map((el, index) => {
                        if (!el || index > 5) {
                            return null;
                        }
                        let count = '';
                        if (index === 5 && ingredientsArray.length > 6) {
                            count = '+' + (ingredientsArray.length - 5);
                        }
                        return (
                            <div className={style.image} key={index.toString()}>
                                <img alt="Фото" src={el.image_mobile} className={style.circles}></img>
                                {count && (
                                    <p className={`${style.link}  text text_type_main-default`}>
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
    );
};

export default Order;