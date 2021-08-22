import { createReducer } from "@reduxjs/toolkit";
import {
  addCostsError,
  addIncomesError,
  getCostsError,
  getIncomesError,
  addCostsRequest,
  addIncomesRequest,
  getCostsRequest,
  getIncomesRequest,
} from "../transactions/transactionsActions";

import {
  addCostsRequest as addCostsCatRequest,
  addIncomesRequest as addIncomesCatRequest,
  getCostsRequest as getCostsCatRequest,
  getIncomesRequest as getIncomesCatRequest,
  addCostsError as addCostsCatError,
  addIncomesError as addIncomesCatError,
  getCostsError as getCostsCatError,
  getIncomesError as getIncomesCatError,
} from "../categories/categoriesActions";

const setError = (_, { payload }) => payload;
const unsetError = () => null;

const errorReducer = createReducer(null, {
  [addCostsError]: setError,
  [addIncomesError]: setError,
  [getCostsError]: setError,
  [getIncomesError]: setError,
  [addCostsRequest]: unsetError,
  [addIncomesRequest]: unsetError,
  [getCostsRequest]: unsetError,
  [getIncomesRequest]: unsetError,
  [addCostsCatRequest]: unsetError,
  [addIncomesCatRequest]: unsetError,
  [getCostsCatRequest]: unsetError,
  [getIncomesCatRequest]: unsetError,
  [addCostsCatError]: setError,
  [addIncomesCatError]: setError,
  [getCostsCatError]: setError,
  [getIncomesCatError]: setError,
});

export default errorReducer;
