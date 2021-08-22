import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCostsSuccess,
  getIncomesSuccess,
  addCostsSuccess,
  addIncomesSuccess,
  setIsDefaultIncomes,
  setIsDefaultCosts,
  unsetIsDefaultIncomes,
  unsetIsDefaultCosts,
} from "./categoriesActions";

const costsCat = createReducer([], {
  [getCostsSuccess]: (_, { payload }) => payload,
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
});

const incomesCat = createReducer([], {
  [getIncomesSuccess]: (_, { payload }) => payload,
  [addIncomesSuccess]: (state, { payload }) => [...state, payload],
});

const isDefault = createReducer(
  {
    costs: false,
    incomes: false,
  },
  {
    [setIsDefaultCosts]: (state) => ({ ...state, costs: true }),
    [setIsDefaultIncomes]: (state) => ({ ...state, incomes: true }),
    [unsetIsDefaultCosts]: (state) => ({ ...state, costs: false }),
    [unsetIsDefaultIncomes]: (state) => ({ ...state, incomes: false }),
  }
);

const categories = combineReducers({
  costsCat,
  incomesCat,
  isDefault,
});

export default categories;
