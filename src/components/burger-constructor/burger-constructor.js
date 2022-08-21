import React, {useState} from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import {DataApp, OrderNumber} from '../../app-context/app-context';
import {useContext} from "react";


function BurgerConstructor({openModal}) {
    function openModalOrder() {
        openModal({typeOfModal: "order"})
    }

    const dataBurgers = useContext(DataApp);
    console.log("Ингридиент", dataBurgers)
    const {orderNumber, setOrderNumber} = useContext(OrderNumber);
    console.log("Номер заказа ", orderNumber)

    const orderHandler = () => {
        const url = "https://norma.nomoreparties.space/api/orders";
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
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка ${res.status}`);
            })
            .then((data) => setOrderNumber(data.order.number))
        openModalOrder()
    }

    const bun = dataBurgers.find((i) => i.type === "bun")
    const mainAndSauce = dataBurgers.filter((i) => i.type !== "bun")

    const totalPrice = mainAndSauce.reduce(
        (previousValue, {price}) => previousValue + price,
        0
    ) + bun?.price * 2;

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
                    <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
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