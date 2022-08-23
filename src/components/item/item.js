import React from "react";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";
import {Counter,} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import style from './item.module.css';
import PropTypes from "prop-types";

function Item({id, ingredient, openModal}) {
    function onClick() {
        openModal({typeOfModal: "details", Id: id})
    }

    return (
        <div className={style.main}>
            <div className={style.item} onClick={onClick}>
                <img className={style.image} src={ingredient.image} alt={`${ingredient.name}`}/>
                <p className={`${style.price} text_type_digits-default`}>
                    {ingredient.price}
                    <CurrencyIcon type={'primary'}/>
                </p>
                <p className="text text_type_main-default">{ingredient.name}</p>
                <Counter count={1} size='small'/>
            </div>
        </div>)
}

Item.propTypes = {
    id: PropTypes.string.isRequired,
    ingredient: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
}

export default Item;