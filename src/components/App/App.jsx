import { Component } from "react";
import MainPage from "../_pages/MainPage";
import TransactionPage from "../_pages/TransactionPage";
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

  handleOpenTransaction = (transType) => this.setState({ transType });

  handleCloseTransaction = () => this.setState({ transType: "" });

  render() {
    const { transType, incomes, costs } = this.state;
    return (
      <>
        {
          !transType ? (
            <MainPage
              handleOpenTransaction={this.handleOpenTransaction}
              costs={costs}
              incomes={incomes}
            />
          ) : (
            <TransactionPage
              transType={transType}
              handleAddTransaction={this.handleAddTransaction}
              handleCloseTransaction={this.handleCloseTransaction}
            />
          )
          // TransactionPage({handleCloseTransaction: this.handleCloseTransaction})
        }
      </>
    );
  }
}

export default App;
