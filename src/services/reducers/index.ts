import { combineReducers } from 'redux';
import {mainReducer} from './main';
import { authReducer} from './authReducers'
import {wsReducer} from  './wsReducers'

export const rootReducer = combineReducers({mainReducer,authReducer,wsReducer})