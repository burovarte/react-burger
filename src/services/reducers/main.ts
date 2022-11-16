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

import {TMainActions} from "../action/main";
import {Ingredient} from "../../utils/types";

type InitialState = {
    ingredients: Array<Ingredient>;
    constructor: Array<Ingredient>;
    ingredient: object | Ingredient;
    order: number
}

const initialState: InitialState = {
    ingredients: [],
    constructor: [],
    ingredient: {},
    order: 0
}


export const mainReducer = (state = initialState, action: TMainActions): InitialState => {
    switch (action.type) {
        case LOAD_INGREDIENTS:
            return {
                ...state,
                ingredients: action.data.map((element) => {
                    element['amount'] = 0;
                    return element;
                })
            }
        case ADD_INGREDIENT:
            return <InitialState>{
                ...state,
                constructor: [...state.constructor, {...action.item, uniqueId: action.uniqueId}],
                ingredients: [...state.ingredients].map((item) =>
                    item._id === action.item._id ? {...item, amount: item.amount + action.amount} : item)
            };

        case DELETE_INGREDIENT:
            return {
                ...state,
                constructor: [...state.constructor].filter((item) => item.uniqueId !== action.item.uniqueId),
                ingredients: [...state.ingredients].map((item) => item._id === action.item._id
                    ? {...item, amount: item.amount - action.qnt}
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
                    item['amount'] = 0;
                    return item;
                }),
            };
        case CHANGE_INGREDIENT:
            const newConstructor = [...state.constructor];
            const dragIndex = newConstructor[action.dragIndex];
            newConstructor.splice(action.dragIndex, 1);
            newConstructor.splice(action.hoverIndex, 0, dragIndex);
            return {
                ...state,
                constructor: newConstructor,
            };
        default:
            return state
    }
}