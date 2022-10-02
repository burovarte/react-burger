import React from "react";
import style from "./ingredient-details.module.css";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

function IngredientDetails() {
     const ing = useSelector((store) => store.mainReducer.ingredient)



    const { id } = useParams();
    const items = useSelector((store) => store.mainReducer.ingredients);
    const item = items?.find((el) => el._id === id);
    console.log ("id:", id)
    console.log("items:", items)
    console.log("item:",item)
    console.log(item?.name)



    return (
        <div className={`${style.main} p-10`}>
            <img className={`${style.foto}`} alt={`${item?.name} `} src={item?.image}/>
            <p className="text text_type_main-medium">{item?.name}</p>
            <div className={`${style.info} mt-8 text_color_inactive`}>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Калории,ккал</p>
                    <p className="text text_type_digits-default">{item?.calories}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_digits-default">{item?.proteins}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_digits-default">{item?.fat}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_digits-default">{item?.carbohydrates}</p>
                </div>
            </div>
        </div>
    );
}

export default IngredientDetails;
