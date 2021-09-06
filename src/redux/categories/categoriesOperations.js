import axios from "axios";
import {
  getCostsRequest,
  getCostsSuccess,
  getCostsError,
  getIncomesRequest,
  getIncomesSuccess,
  getIncomesError,
  addIncomesRequest,
  addCostsRequest,
  addIncomesSuccess,
  addCostsSuccess,
  addIncomesError,
  addCostsError,
  setIsDefaultIncomes,
  setIsDefaultCosts,
} from "./categoriesActions";

// axios.defaults.baseURL = "http://localhost:4040";

export const getCategories = (transType) => (dispatch) => {
  transType === "incomes"
    ? dispatch(getIncomesRequest())
    : dispatch(getCostsRequest());

  axios
    .get(transType + "Cat")
    .then(({ data }) => {
      if (data.length) {
        transType === "incomes"
          ? dispatch(getIncomesSuccess(data))
          : dispatch(getCostsSuccess(data));
      } else {
        transType === "incomes"
          ? dispatch(setIsDefaultIncomes())
          : dispatch(setIsDefaultCosts());
      }
    })
    .catch((err) =>
      transType === "incomes"
        ? dispatch(getIncomesError(err))
        : dispatch(getCostsError(err))
    );
};

export const addCategory =
  ({ transType, category }) =>
  (dispatch) => {
    transType === "incomes"
      ? dispatch(addIncomesRequest())
      : dispatch(addCostsRequest());

    axios
      .post(transType + "Cat", category)
      .then(({ data }) =>
        transType === "incomes"
          ? dispatch(addIncomesSuccess(data))
          : dispatch(addCostsSuccess(data))
      )
      .catch((err) =>
        transType === "incomes"
          ? dispatch(addIncomesError(err))
          : dispatch(addCostsError(err))
      );
  };
