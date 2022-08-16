import style from "./ingredientdetails.module.css";
import PropTypes from "prop-types";

function IngredientDetails({ingredient}) {
    return (
        <div className={`${style.main} p-10`}>
            <img className={`${style.foto}`} alt={`${ingredient.name} `} src={ingredient.image}/>
            <p className="text text_type_main-medium">{ingredient.name}</p>
            <div className={`${style.info} mt-8 text_color_inactive`}>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Калории,ккал</p>
                    <p className="text text_type_digits-default">{ingredient.calories}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_digits-default">{ingredient.proteins}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_digits-default">{ingredient.fat}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
                </div>
            </div>
        </div>
    );
}

IngredientDetails.propTypes = {
    ingredient: PropTypes.object.isRequired
}

export default IngredientDetails;
