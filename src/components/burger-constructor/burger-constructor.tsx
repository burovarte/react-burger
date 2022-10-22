import React, {ComponentProps, FC, PropsWithChildren, useMemo} from "react";
import {ConstructorElement,  Button as _Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

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

const Button = _Button as FC<PropsWithChildren<ComponentProps<typeof _Button>>>
export type Ingredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    uniqueId?: number;
    index: number;
    count: number;
    _v: string;
    amount: number;
}

type BurgerConstructorProps = {
    openModal: (modalInfo: { typeOfModal: string }) => void
}
const BurgerConstructor: FC<BurgerConstructorProps> = ({openModal}) => {
    function openModalOrder() {
        openModal({typeOfModal: "order"})
    }

    const auth: any = useSelector<any>((store) => store.authReducer.isAuthorized);
    const dispatch = useDispatch<any>()

    const dataBurgers: Ingredient[] = useSelector<any>((store) => store.mainReducer.constructor) as any

    const navigate = useNavigate();
    const location = useLocation()



    const orderHandler = () => {
        if (auth) {
            const url: string = `${baseUrl}orders`;
            const idIndridient = dataBurgers.map((ingredient) => {
                return ingredient._id
            });
            dispatch(sendOrder(url, idIndridient, dispatch))
            openModalOrder()
        } else {
            navigate('/login', {state: {from: location.pathname}})
        }
    }


    const bun = useMemo(() => dataBurgers.find((i) => i.type === "bun"), [dataBurgers])
    const mainAndSauce = useMemo(() => dataBurgers.filter((i) => i.type !== "bun"), [dataBurgers])
    console.log('mainAndSauce', mainAndSauce)

    const totalPrice = useMemo(() => (mainAndSauce.reduce(
        (previousValue, {price}) => previousValue + price, 0
    ) + (bun?.price ?? 0) * 2), [mainAndSauce])


    const [, dropTarget] = useDrop<Ingredient>({
        accept: 'ingredient',
        drop(item) {
            const uniqueId = uuidv4();
            let amount = 1;
            let selectedBun = dataBurgers.find((item) => item.type === 'bun');
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

    const dragItem = (dragIndex: number, hoverIndex: number) => {
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


export default BurgerConstructor;