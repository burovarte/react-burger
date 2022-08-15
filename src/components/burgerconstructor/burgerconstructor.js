import React from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burgerconstructor.module.css';
import PropTypes from 'prop-types';

function Burgerconstructor({dataBurgers, openModal}) {
    function openModalOrder (){
        openModal({typeOfModal: "order"})
    }
    const bun = dataBurgers.find((i)=> i.type ==="bun")
    const mainAndSauce = dataBurgers.filter ((i) => i.type !== "bun")
    return(
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
                        <DragIcon type="primary" />
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
                <p className="text text_type_digits-medium mr-2">610</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button type="primary" size="large" onClick={openModalOrder}>
                Оформить заказ
            </Button>
        </div>
        </section>)}

Burgerconstructor.propTypes ={
    dataBurgers: PropTypes.arrayOf.isRequired,
    openModal: PropTypes.func.isRequired
}
export default Burgerconstructor;