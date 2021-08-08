import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
import TransactionsHistoryPage from "../_pages/TransactionsHistoryPage";
import "./App.css";

class App extends Component {
  state = {
    costs: [],
    incomes: [],
    transType: "",
  };

  componentDidMount() {
    const costsJson = localStorage.getItem("costs");
    const incomesJson = localStorage.getItem("incomes");
    const costs = costsJson === null ? [] : JSON.parse(costsJson);
    const incomes = incomesJson === null ? [] : JSON.parse(incomesJson);
    this.setState({ costs, incomes });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.costs !== prevState.costs) {
      this.addToLS("costs");
    }
    if (this.state.incomes !== prevState.incomes) {
      this.addToLS("incomes");
    }
  }

  addToLS = (transType) => {
    const dataToLS = JSON.stringify(this.state[transType]);
    localStorage.setItem(transType, dataToLS);
  };

  handleAddTransaction = ({ transType, transaction }) => {
    this.setState((prevState) => {
      const prevTransactionData = prevState[transType];
      return {
        [transType]: [...prevTransactionData, transaction],
      };
    });
  };

  // handleOpenTransaction = (transType) => this.setState({ transType });

  handleCloseTransaction = () => this.setState({ transType: "" });

  render() {
    const { transType, incomes, costs } = this.state;
    return (
      <Switch>
        {/* <Route path="/" component={MainPage} /> */}

        <Route
          path="/transaction/:transType"
          render={(routerProps) => (
            <TransactionPage
              {...routerProps}
              transType={transType}
              handleAddTransaction={this.handleAddTransaction}
            />
          )}
        />
        <Route
          path="/history/:transType"
          render={() => (
            <TransactionsHistoryPage costs={costs} incomes={incomes} />
          )}
        />
        <Route path="/">
          <MainPage costs={costs} incomes={incomes} />
        </Route>
      </Switch>
    );
  }
}

export default App;
