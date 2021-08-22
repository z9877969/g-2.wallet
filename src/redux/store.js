import { configureStore } from "@reduxjs/toolkit";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";
import error from "./error/errorReducer";

export const store = configureStore({
  reducer: {
    transactions,
    categories,
    error,
  },
});
