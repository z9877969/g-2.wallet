import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { getCurUser } from "../../redux/auth/authOperations";
import { getIdToken, getIsAuth } from "../../redux/auth/authSelectors";
import { getTransactions } from "../../redux/transactions/transactionsOperations";
import AuthPage from "../_pages/AuthPage";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import TransactionsHistoryPage from "../_pages/TransactionsHistoryPage";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const idToken = useSelector(getIdToken);

  useEffect(() => {
    isAuth && dispatch(getTransactions("costs"));
    isAuth && dispatch(getTransactions("incomes"));
  }, []);

  useEffect(() => {
    idToken && dispatch(getCurUser(idToken));
  }, [idToken]);

  return isAuth ? (
    <Switch>
      <Route path="/transaction/:transType" component={TransactionPage} />
      <Route path="/history/:transType" component={TransactionsHistoryPage} />
      <Route path="/" component={MainPage} exact />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/auth/:authType" component={AuthPage} />
      <Redirect to="/auth/login" />
    </Switch>
  );
};

export default App;
