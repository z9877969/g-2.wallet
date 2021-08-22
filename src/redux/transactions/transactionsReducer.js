import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCostsSuccess,
  getIncomesSuccess,
  addCostsSuccess,
  addIncomesSuccess,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [getCostsSuccess]: (_, action) => action.payload,
  [addCostsSuccess]: (state, action) => [...state, action.payload],
});

const incomesReducer = createReducer([], {
  [getIncomesSuccess]: (_, action) => action.payload,
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export default transactionsReducer;
