import {ADD_INGREDIENT, LOAD_INGREDIENTS, ORDER_CLEAR, ORDER_NUMBER} from "./index";
import {checkResponse} from "../../utils/check-response";
import React, {useState, useEffect, useContext} from "react";

export const addIngredient = (item, uniqueId, amount) => {
    console.log(uniqueId)
    return {
        type: ADD_INGREDIENT,
        item,
        uniqueId,
        amount,
    };
};

export const loadIngredients = (url) => {
    return function (dispatch) {
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

export const sendOrder = (url,idIndridient) => {
    return function (dispatch) {
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