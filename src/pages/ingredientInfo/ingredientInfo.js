import React from "react";
import style from './ingredientInfo.module.css';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';


function IngredientInfo() {
    const {id} = useParams();
    const ingredients = useSelector((store) => store.mainReducer.ingredients);
    const item = ingredients.find((el) => el._id === id);

    return (
        <div className={style.card}>
            <h1 className={`${style.label}  text text_type_main-large`}>
                Детали ингредиента
            </h1>
            <img src={item.image_large} alt="Ингредиент" className="mr-5 ml-5"/>
            <p className={`${style.name}  text text_type_main-medium mt-4`}>
                {item.name}
            </p>
            <div className={`${style.details}   mt-8 mb-15`}>
                <div className={`${style.detail} mr-5`}>
                    <p className="text text_type_main-default">Калории, ккал</p>
                    <p className="text text_type_digits-default">{item.calories}</p>
                </div>
                <div className={`${style.detail} mr-5`}>
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_digits-default">{item.proteins}</p>
                </div>
                <div className={`${style.detail} mr-5`}>
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_digits-default">{item.fat}</p>
                </div>
                <div className={`${style.detail} mr-5`}>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_digits-default">{item.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

export default IngredientInfo;