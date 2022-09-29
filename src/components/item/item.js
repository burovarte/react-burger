import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";
import {Counter,} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import style from './item.module.css';
import PropTypes from "prop-types";
import {useDrag} from "react-dnd";
import {Link, useHistory, useLocation} from 'react-router-dom';


function Item({id, ingredient, openModal}) {
    function onClick() {
        openModal({typeOfModal: "details", Id: id})
    }

    const [, dragRef] = useDrag({
        type: 'ingredient',
        item: ingredient,
    })


    const location = useLocation();

    const ingredientId = ingredient['_id'];

    return (
        <Link
            key={ingredientId}
            to={{
                // Тут мы формируем динамический путь для нашего ингредиента
                // а также сохраняем в свойство background роут, на котором была открыта наша модалка.
                pathname: `/ingredients/${ingredientId}`,
                state: {background: location},
            }}
        >
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
        </Link>)
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    ingredient: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
}

export default Item;