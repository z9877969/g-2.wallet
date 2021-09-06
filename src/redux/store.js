import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import transactions from "./transactions/transactionsReducer";
import categories from "./categories/categoriesReducer";
import error from "./error/errorReducer";
import auth from "./auth/authReducer";


export const store = configureStore({
  reducer: {
    auth,
    transactions,
    categories,
    error,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
