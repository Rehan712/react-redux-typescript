import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { Todo } from "../actions/index";

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers({
  todos: todoReducer
});
