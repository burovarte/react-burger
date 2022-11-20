import {store} from '../services/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action, ActionCreator} from 'redux';
import {TMainActions} from '../services/action/main'
import {TAuthActions} from "../services/action/authAction";
import {TWSActions} from "../services/action/wsAction";

export type TUserData = {
    name?: string
    email?: string,
    password?: string,
}

export type Ingredient = {
    _id: string;
    name: string;
    type: "bun" | "main" | "sauce";
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    uniqueId?: number;
    index: number;
    count: number;
    _v: string;
    amount: number;
}

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions = TAuthActions | TMainActions | TWSActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppThunkAction<TReturn = void> = ThunkAction<TReturn, RootState, any, TApplicationActions>;

export type AppDispatch = ThunkDispatch<RootState, any, TApplicationActions>;
