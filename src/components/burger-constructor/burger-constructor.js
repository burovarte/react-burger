import React, {useMemo, useState} from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import {DataApp, OrderNumber} from '../../app-context/app-context';
import {useContext} from "react";
import {baseUrl} from "../../utils/base-url";
import {checkResponse} from "../../utils/check-response";
import {useDispatch, useSelector} from "react-redux";
import {ORDER_NUMBER, ADD_INGREDIENT, CHANGE_INGREDIENT, DELETE_INGREDIENT} from "../../services/action";
import {useDrop} from "react-dnd";


function BurgerConstructor({openModal},props) {
    function openModalOrder() {
        openModal({typeOfModal: "order"})
    }

    const dispatch = useDispatch()

    const dataBurgers = useSelector((store) => store.mainReducer.constructor)
    const a = useSelector((store) => store.mainReducer.constructor)
    console.log(a)
    const orderNumber = useSelector((store) => store.mainReducer.order)

    const orderHandler = () => {
        const url = `${baseUrl}orders`;
        const idIndridient = Object.values(dataBurgers).map((ingredient) => {
            return ingredient._id
        });

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ingredients: idIndridient}),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(checkResponse)
            .then((response) => {
                dispatch({
                    type: ORDER_NUMBER,
                    number: response.order.number,
                });
            })
            .catch((error) => {
                console.log(error)
            })
        dispatch({
            type: ORDER_NUMBER,
            number: orderNumber,
        });
        openModalOrder()
    }


    const bun = useMemo(() => Object.values(dataBurgers).find((i) => i.type === "bun"), [dataBurgers])
    const mainAndSauce = useMemo(() => Object.values(dataBurgers).filter((i) => i.type !== "bun"), [dataBurgers])

    const totalPrice = useMemo(() => (mainAndSauce.reduce(
        (previousValue, {price}) => previousValue + price, 0
    ) + bun?.price * 2), [mainAndSauce])

    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item) {
            const uniqueId = Date.now().toString(36) + Math.random().toString(36).substr(2);
            let amount = 1;
            let selectedBun = Object.values(dataBurgers).find((el) => el.type === 'bun');
            dispatch({
                type: ADD_INGREDIENT,
                item: item,
                id: uniqueId,
                amount: amount,
            });
        }
    });


    return (
        <section ref={dropTarget} className={`${style.main} pt-25`}>
            {bun && (
                <div className={style.item_top}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </div>
            )}
            {mainAndSauce && (
                <div className={style.items_mainAndSauce}>
                    {mainAndSauce.map((item) => (
                        <div className={style.item_mainAndSauce} key={item._id}>
                            <div className="mr-1">
                                <DragIcon type="primary"/>
                            </div>
                            <ConstructorElement
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                            />
                        </div>
                    ))}
                </div>
            )}
            {bun && (
                <div className={style.item_buttom}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </div>)}
            <div className={style.price_main}>
                <div className={style.price}>
                    <p className="text text_type_digits-medium mr-2">{totalPrice ? totalPrice : 0}</p>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button type="primary" size="large" onClick={orderHandler}>
                    Оформить заказ
                </Button>
            </div>

        </section>
    )
}

BurgerConstructor.propTypes = {
    openModal: PropTypes.func.isRequired
}

export default BurgerConstructor;