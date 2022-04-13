import {combineReducers, createStore} from "redux";
import { itemsReducer } from "./itemsReducer";

const rootReducer = combineReducers({
    items: itemsReducer
  })

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>