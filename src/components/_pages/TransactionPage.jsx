import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import TransactionForm from "../TransactionForm/TransactionForm";
import Button from "../_share/Button/Button";
import CategoriesTransactions from "../CategoriesTransactions/CategoriesTransactions";
import Section from "../_share/Section/Section";
import { costsCat, incomesCat } from "../../assets/transCategories.json";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "../../redux/transactions/transactionsOperations";
import { useEffect } from "react";
import {
  addCategories,
  addCategory,
  getCategories,
} from "../../redux/categories/categoriesOperations";
import {
  unsetIsDefaultCosts,
  unsetIsDefaultIncomes,
} from "../../redux/categories/categoriesActions";

const TransactionPage = ({ match, history }) => {
  const dispatch = useDispatch();

  const { costs: isDefaultCosts, incomes: isDefaultIncomes } = useSelector(
    (state) => state.categories.isDefault
  );
  const categories = useSelector((state) => state.categories);

  const { push, location } = history;
  const { transType } = match.params;

  const [dataForm, setDataForm] = useState({
    date: "2020-10-07",
    time: "",
    category: transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "UAH",
    comment: "",
  });

  const title = transType === "costs" ? "Расходы" : "Доходы";
  const dataList = transType === "costs" ? costsCat : incomesCat;

  const handleGoBack = () => {
    push(location.state?.from || "/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCategory = (value) => {
    setDataForm((prev) => ({ ...prev, category: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction({ transType, transaction: dataForm }));

    handleGoBack();
  };

  const handleOpenCatTrans = () => {
    push({
      pathname: match.url + "/cat-list",
      state: {
        from: location,
      },
    });
  };

  useEffect(() => {
    !categories[transType + "Cat"].length && dispatch(getCategories(transType));
  }, []);

  useEffect(() => {
    transType === "costs" &&
      isDefaultCosts &&
      costsCat.forEach((category, idx) => {
        dispatch(addCategory({ transType, category }));
        idx === 0 && dispatch(unsetIsDefaultCosts());
      });

    transType === "incomes" &&
      isDefaultIncomes &&
      incomesCat.forEach((category, idx) => {
        dispatch(addCategory({ transType, category }));
        idx === 0 && dispatch(unsetIsDefaultIncomes());
      });
  }, [isDefaultCosts, isDefaultIncomes]);

  return (
    <Section>
      <Switch>
        <Route
          path={match.path + "/cat-list"}
          render={(props) => (
            <CategoriesTransactions
              {...props}
              dataList={dataList}
              handleOpenCatTrans={handleOpenCatTrans}
              handleAddCategory={handleAddCategory}
            />
          )}
        />
        <Route path={match.path}>
          <>
            <Button title="GoBack" cbOnClick={handleGoBack} />
            <h1>{title}</h1>
            <TransactionForm
              transType={transType}
              dataForm={dataForm}
              handleOpenCatTrans={handleOpenCatTrans}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </>
        </Route>
      </Switch>
    </Section>
  );
};

export default TransactionPage;
