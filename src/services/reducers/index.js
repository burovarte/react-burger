import { combineReducers } from 'redux';
import {mainReducer} from './main';
import { authReducer} from './authReducers'

export const rootReducer = combineReducers({mainReducer,authReducer})