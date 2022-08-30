import {ADD_INGREDIENT} from "./index";

export const addIngredient = (item, uniqueId, amount) => {
    return {
        type: ADD_INGREDIENT,
        item,
        uniqueId,
        amount,
    };
};