
export type TUserData = {
    email: string,
    password: string,
    name?: string,
}

import { store } from '../services/store';
import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { TMainActions } from '../services/action/main'
import {TAuthActions} from "../services/action/authAction";

export type RootState = ReturnType<typeof store.getState>;

export type TApplicationActions =  TAuthActions | TMainActions  ;

export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
    >;

export type AppThunkAction<TReturn = void> = ThunkAction<TReturn, Action, RootState, TApplicationActions>;

export type AppDispatch = typeof store.dispatch;
