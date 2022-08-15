import style from "./ingredientdetails.module.css";
import PropTypes from "prop-types";

function IngredientDetails({image,name, calories, fat, proteins,carbohydrates,}) {
    return (
        <div className={`${style.main} p-10`}>
            <img className={`${style.foto}`} alt="заказ принят" src={image} />
            <p className="text text_type_main-medium">{name}</p>
            <div className={`${style.info} mt-8 text_color_inactive`}>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Калории,ккал</p>
                    <p className="text text_type_digits-default">{calories}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_digits-default">{proteins}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_digits-default">{fat}</p>
                </div>
                <div className={`${style.compound} mr-5`}>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_digits-default">{carbohydrates}</p>
                </div>
            </div>
        </div>
    );
}

IngredientDetails.propTypes={
    image: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    fat: PropTypes.number,
    proteins: PropTypes.number,
    carbohydrates: PropTypes.number
}

export default IngredientDetails;
