import React, {FC} from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";
import {Counter} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import style from './item.module.css';
import {useDrag} from "react-dnd";
import {useLocation, useNavigate} from 'react-router-dom';
import {Ingredient} from "../../utils/types";

type ItemProps = {
    id: string;
    ingredient: Ingredient;
    openModal: (modalInfo: { typeOfModal: string; Id: string }) => void
}

const Item: FC<ItemProps> = ({id, ingredient, openModal}) => {

    const navigate = useNavigate();
    const location = useLocation()
    const ingredientId = ingredient['_id'];

    function onClick() {
        openModal({typeOfModal: 'details', Id: id});
        navigate(`/ingridient/${ingredientId}`, {
            state: {from: location.pathname, background: location},
        });
    }

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: ingredient,
    })

    return (
        <div className={style.main}>
            <div ref={dragRef} className={style.item} onClick={onClick}>
                <img className={style.image} src={ingredient.image} alt={`${ingredient.name}`}/>
                <p className={`${style.price} text_type_digits-default`}>
                    {ingredient.price}
                    <CurrencyIcon type={'primary'}/>
                </p>
                <p className="text text_type_main-default">{ingredient.name}</p>
                {ingredient.amount > 0 && <Counter count={ingredient.amount} size='small'/>}
            </div>
        </div>
    )
}

export default Item;