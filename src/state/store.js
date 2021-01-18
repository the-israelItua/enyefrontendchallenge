import { createStore, applyMiddleware } from "redux";
import {combineReducers} from "redux"
import reduxThunk from "redux-thunk";
import { profileReducer } from "./reducers";

const reducer = combineReducers({
    profiles: profileReducer
})

let store = createStore( reducer, applyMiddleware(reduxThunk));


export { store };
