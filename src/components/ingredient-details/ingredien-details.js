import React from "react";
import style from "./ingredient-details.module.css";
import {useSelector} from "react-redux";

function IngredientDetails() {
     const ing = useSelector((store) => store.mainReducer.ingredient)
    return (
        <div className={`${style.main} p-10`}>
            <img className={`${style.foto}`} alt={`${ing.name} `} src={ing.image}/>
            <p className="text text_type_main-medium">{ing.name}</p>
            <div className={`${style.info} mt-8 text_color_inactive`}>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Калории,ккал</p>
                    <p className="text text_type_digits-default">{ing.calories}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_digits-default">{ing.proteins}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_digits-default">{ing.fat}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_digits-default">{ing.carbohydrates}</p>
                </div>
            </div>
        </div>
    );
}

export default IngredientDetails;
