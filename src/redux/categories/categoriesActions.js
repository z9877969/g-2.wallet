import { createAction } from "@reduxjs/toolkit";

export const getIncomesRequest = createAction("categories/getIncomesRequest");
export const getIncomesSuccess = createAction("categories/getIncomesSuccess");
export const getIncomesError = createAction("categories/getIncomesError");

export const getCostsRequest = createAction("categories/getCostsRequest");
export const getCostsSuccess = createAction("categories/getCostsSuccess");
export const getCostsError = createAction("categories/getCostsError");

export const addIncomesRequest = createAction("categories/addIncomesRequest");
export const addIncomesSuccess = createAction("categories/addIncomesSuccess");
export const addIncomesError = createAction("categories/addIncomesError");

export const addCostsRequest = createAction("categories/addCostsRequest");
export const addCostsSuccess = createAction("categories/addCostsSuccess");
export const addCostsError = createAction("categories/addCostsError");

export const setIsDefaultCosts = createAction("categories/setIsDefaultCosts");
export const setIsDefaultIncomes = createAction(
  "categories/setIsDefaultIncomes"
);

export const unsetIsDefaultCosts = createAction(
  "categories/unsetIsDefaultCosts"
);
export const unsetIsDefaultIncomes = createAction(
  "categories/unsetIsDefaultIncomes"
);
