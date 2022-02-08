import {createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { mainReducer } from "./reducer1";

const rootReducer = combineReducers({ mainReducer });
export const Store = createStore(rootReducer, applyMiddleware(thunk));