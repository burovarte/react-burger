
export type TUserData = {

    name?: string
    email?: string,
    password?: string,

}

import { store } from '../services/store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TMainActions } from '../services/action/main'
import {TAuthActions} from "../services/action/authAction";

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =  TAuthActions | TMainActions  ;

export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
    >;

export type AppThunkAction<TReturn = void> = ThunkAction<TReturn, RootState, any, TApplicationActions>;

export type AppDispatch = ThunkDispatch<RootState, any, TApplicationActions>;
