import React, {FC, useMemo} from "react";
import {ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {Button} from '../../utils/buttons'
import style from './burger-constructor.module.css';
import {baseUrl} from "../../utils/base-url";
import {DELETE_INGREDIENT, CHANGE_INGREDIENT} from "../../services/action";
import {useDrop} from "react-dnd";
import {addIngredient, sendOrder2} from '../../services/action/main'
import {v4 as uuidv4} from 'uuid';
import ConstructorItem from "../constructor-item/constructor-item";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "../../utils/hooks";
import {Ingredient} from "../../utils/types";

type BurgerConstructorProps = {
    openModal: (modalInfo: { typeOfModal: string }) => void
}
const BurgerConstructor: FC<BurgerConstructorProps> = ({openModal}) => {
    function openModalOrder() {
        openModal({typeOfModal: "order"})
    }

    const auth = useSelector((store) => store.authReducer.isAuthorized);
    const dispatch = useDispatch()

    const dataBurgers: Ingredient[] = useSelector((store) => store.mainReducer.burgerConstructor)

    const navigate = useNavigate();
    const location = useLocation()

    const orderHandler = () => {
        if (auth) {
            const url: string = `${baseUrl}orders`;
            const idIndridient = dataBurgers.map((ingredient) => {
                return ingredient._id
            });
            dispatch(sendOrder2(url, dataBurgers))
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
                        qnt: amount
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
        <section ref={dropTarget} className={`${style.ui} burger-constructor pt-25`}>
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