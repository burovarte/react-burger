import {
    LOAD_INGREDIENTS,
    ADD_INGREDIENT,
    CHANGE_INGREDIENT,
    DELETE_INGREDIENT,
    LOAD_DETAILS,
    DELETE_DETAILS,
    ORDER_NUMBER,
    ORDER_CLEAR
} from "../action";

const initialState = [{
    ingredients: [],
    constructor: [],
    ingredient: {},
    order: 0
}]


export const mainReducer = (state = {initialState}, action) => {
    switch (action.type) {
        case LOAD_INGREDIENTS:
            return {
                ...state,
                ingredients: action.data.map((element) => {
                    element['count'] = 0;
                    return element;
                })
            }
        case ADD_INGREDIENT:
            return {
                ...state,
                constructor: [
                    ...state.constructor,
                    { ...action.item, uniqueId: action.id },
                ],
                ingredients: [...state.ingredients].map((item) =>
                    item._id === action.item._id
                        ? { ...item, count: item.count + action.amount }
                        : item
                ),
            };
        case LOAD_DETAILS:
            return {
                ...state,
                ingredient: action.item,
            };

        case DELETE_DETAILS:
            return {
                ...state,
                ingredient: {},
            };


        case ORDER_NUMBER:
            return {
                ...state,
                order: action.number,
            };

        case ORDER_CLEAR:
            return {
                ...state,
                constructor: [],
                ingredients: [...state.ingredients].map((item) => {
                    item['count'] = 0;
                    return item;
                }),
            };
        default:
            return state
    }
}