import {
    ADD_INGREDIENT, LOAD_INGREDIENTS, ORDER_CLEAR, ORDER_NUMBER,
    LOAD_DETAILS,
    DELETE_DETAILS,
    DELETE_INGREDIENT,
    CHANGE_INGREDIENT,
} from "./index";
import {checkResponse} from "../../utils/check-response";
import {Ingredient} from "../../utils/types";
import {AppDispatch} from "../../utils/types";
import {getCookie} from "./authAction";


export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT;
    readonly item: Ingredient;
    readonly uniqueId: string;
    readonly amount: number;
}

export interface ILoadIngredients {
    readonly type: typeof LOAD_INGREDIENTS;
    readonly data: Array<Ingredient>;
}

export interface ISendOrder {
    readonly type: typeof ORDER_NUMBER;
    readonly number: number;
}

export interface IOrderClear {
    readonly type: typeof ORDER_CLEAR;
}

export interface ILoadDetailsAction {
    readonly type: typeof LOAD_DETAILS;
    readonly item: Ingredient;
}

export interface IDeleteDetailsAction {
    readonly type: typeof DELETE_DETAILS;
}

export interface IDeleteIngredientAction {
    readonly type: typeof DELETE_INGREDIENT;
    readonly item: Ingredient,
    readonly qnt: number,
}

export interface IChangeingredientAction {
    readonly type: typeof CHANGE_INGREDIENT;
    readonly dragIndex: number,
    readonly hoverIndex: number,
}

export type TMainActions =
    IAddIngredient
    | ILoadIngredients
    | ISendOrder
    | IOrderClear
    | IChangeingredientAction
    | IDeleteIngredientAction
    | IDeleteDetailsAction
    | ILoadDetailsAction


export const addIngredient = (item: Ingredient, uniqueId: string, amount: number) => {
    console.log(uniqueId)
    return {
        type: ADD_INGREDIENT,
        item,
        uniqueId,
        amount,
    };
};

export const loadIngredients = (url: string)=> {
    return function (dispatch: AppDispatch) {
        fetch(url)
            .then(checkResponse)
            .then((res) => {
                dispatch({
                    type: LOAD_INGREDIENTS,
                    data: res.data,
                });
            })
            .catch((error) => {
                console.log(error)
            });
    }
}

export const sendOrder = (url: string, idIndridient: string[]) => {
    return function (dispatch: AppDispatch) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ingredients: idIndridient}),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(checkResponse)
            .then((response) => {
                dispatch({
                    type: ORDER_NUMBER,
                    number: response.order.number,
                });
                dispatch({type: ORDER_CLEAR})
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const sendOrder2 = (url: string, dataBurgers: Ingredient[]) => {
    const orders = dataBurgers.map((item) => item._id);
    return function (dispatch: AppDispatch) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ingredients: orders}),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: getCookie('accessToken'),
            }
        })
            .then(checkResponse)
            .then((response) => {
                dispatch({
                    type: ORDER_NUMBER,
                    number: response.order.number,
                });
                dispatch({type: ORDER_CLEAR})
            })
            .catch((error) => {
                console.log(error)
            })
    }
}