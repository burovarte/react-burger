import React, {useMemo, useState} from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import {DataApp, OrderNumber} from '../../app-context/app-context';
import {useContext} from "react";
import {baseUrl} from "../../utils/base-url";
import {checkResponse} from "../../utils/check-response";


function BurgerConstructor({openModal}) {
    function openModalOrder() {
        openModal({typeOfModal: "order"})
    }

    const dataBurgers = useContext(DataApp);
    const {orderNumber, setOrderNumber} = useContext(OrderNumber);

    const orderHandler = () => {
        const url = `${baseUrl}orders`;
        const idIndridient = dataBurgers.map((ingredient) => {
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
            .then((data) => setOrderNumber(data.order.number))
            .catch((error) => {
                console.log(error)
            })
        openModalOrder()
    }

    const bun = useMemo(() => dataBurgers.find((i) => i.type === "bun"), [dataBurgers])
    const mainAndSauce = useMemo(() => dataBurgers.filter((i) => i.type !== "bun"), [dataBurgers])

    const totalPrice = useMemo(() => (mainAndSauce.reduce(
        (previousValue, {price}) => previousValue + price, 0
    ) + bun?.price * 2), [mainAndSauce])

    return (
        <section className={`${style.main} pt-25`}>
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
                    <p className="text text_type_digits-medium mr-2">{totalPrice ? totalPrice:0}</p>
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