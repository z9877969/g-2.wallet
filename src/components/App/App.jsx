import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getTransactions } from "../../redux/transactions/transactionsOperations";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import TransactionsHistoryPage from "../_pages/TransactionsHistoryPage";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions("costs"));
    dispatch(getTransactions("incomes"));
  }, []);

  return (
    <Switch>
      <Route path="/transaction/:transType" component={TransactionPage} />
      <Route path="/history/:transType" component={TransactionsHistoryPage} />
      <Route path="/" component={MainPage} />
    </Switch>
  );
};

export default App;
