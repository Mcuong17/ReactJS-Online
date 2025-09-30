import {combineReducers} from "redux"
import productReducer from "./productReducer"

const initState = {}

const rootReducer = combineReducers({
    product: productReducer
})

export default rootReducer