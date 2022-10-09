import React, {useMemo} from "react";
import {ConstructorElement, Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import {baseUrl} from "../../utils/base-url";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_INGREDIENT, CHANGE_INGREDIENT} from "../../services/action";
import {useDrop} from "react-dnd";
import {addIngredient, sendOrder} from '../../services/action/main'
import {v4 as uuidv4} from 'uuid';
import ConstructorItem from "../constructor-item/constructor-item";
import {useLocation, useNavigate} from "react-router-dom";


function BurgerConstructor({openModal}) {
    function openModalOrder() {
        openModal({typeOfModal: "order"})
    }

    const auth = useSelector((store) => store.authReducer.isAuthorized);
    const dispatch = useDispatch()

    const dataBurgers = useSelector((store) => store.mainReducer.constructor)

    const navigate = useNavigate();
    const location  = useLocation()



    const orderHandler = () => {
        if (auth) {
            const url = `${baseUrl}orders`;
            const idIndridient = Object.values(dataBurgers).map((ingredient) => {
                return ingredient._id
            });
            dispatch(sendOrder(url, idIndridient, dispatch))
            openModalOrder()
        } else {
            navigate('/login',{state: {from: location.pathname}})
        }
    }


    const bun = useMemo(() => Object.values(dataBurgers).find((i) => i.type === "bun"), [dataBurgers])
    const mainAndSauce = useMemo(() => Object.values(dataBurgers).filter((i) => i.type !== "bun"), [dataBurgers])

    const totalPrice = useMemo(() => (mainAndSauce.reduce(
        (previousValue, {price}) => previousValue + price, 0
    ) + bun?.price * 2), [mainAndSauce])


    const [, dropTarget] = useDrop({
        accept: 'ingredient',
        drop(item) {
            const uniqueId = uuidv4();
            let amount = 1;
            let selectedBun = Object.values(dataBurgers).find((item) => item.type === 'bun');
            if (item.type === 'bun') {
                amount++;
                if (selectedBun) {
                    dispatch({
                        type: DELETE_INGREDIENT,
                        item: selectedBun,
                        amount: amount
                    })
                }
            }
            dispatch(addIngredient(item, uniqueId, amount))
        }
    });

    const dragItem = (dragIndex, hoverIndex) => {
        dispatch({
            type: CHANGE_INGREDIENT,
            dragIndex: dragIndex,
            hoverIndex: hoverIndex,
        });
    }

    return (
        <section ref={dropTarget} className={`${style.ui} pt-25`}>
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
            <div className={style.items_mainAndSauce}>
                {dataBurgers.map((item, index) => (
                    item.type !== 'bun' && (
                        <ConstructorItem
                            item={item}
                            key={item.uniqueId}
                            index={index}
                            dragItem={dragItem}/>)
                ))}
            </div>
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
            {bun && (
                <div className={style.price_main}>
                    <div className={style.price}>
                        <p className="text text_type_digits-medium mr-2">{totalPrice ? totalPrice : 0}</p>
                        <CurrencyIcon type="primary"/>
                    </div>

                    <Button type="primary" size="large" onClick={orderHandler}>
                        Оформить заказ
                    </Button>
                </div>)}

        </section>
    )
}

BurgerConstructor.propTypes = {
    openModal: PropTypes.func.isRequired
}

export default BurgerConstructor;