import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/currency-icon";
import { Counter,  } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/counter";
import style from './item.module.css';
import PropTypes from "prop-types";

function Item({id,image, name,price,openModal}) {
    function onClick(){
        openModal({typeOfModal: "details", Id: id})
    }
    return(
        <div className={style.main} >
         <div className={style.item} onClick={onClick}>
            <img className={style.image} src ={image} alt={""} />
            <p className={`${style.price} text_type_digits-default`}>
                {price}
                <CurrencyIcon type={'primary'} />
            </p>
            <p className="text text_type_main-default">{name}</p>
            <Counter count={1} size='small'/>
         </div>
        </div>)}

Item.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    openModal: PropTypes.func
}

export default Item;