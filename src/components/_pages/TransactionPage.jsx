import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import TransactionForm from "../TransactionForm/TransactionForm";
import Button from "../_share/Button/Button";
import CategoriesTransactions from "../CategoriesTransactions/CategoriesTransactions";
import { costsCat, incomesCat } from "../../assets/transCategories.json";

class TransactionPage extends Component {
  state = {
    date: "2020-10-07",
    time: "",
    category:
      this.props.match.params.transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "UAH",
    comment: "",
    isCategoryList: false,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddCategory = (value) => {
    this.setState({ category: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { isCategoryList, ...dataForm } = this.state;
    const { match, handleAddTransaction } = this.props;
    const { transType } = match.params;
    handleAddTransaction({ transType, transaction: dataForm });

    this.handleGoBack();
  };

  handleOpenCatTrans = () => {
    const {
      history: { push, location },
      match,
    } = this.props;
    push({
      pathname: match.url + "/cat-list",
      state: {
        from: location,
        // prevLocation: location.state.from,
      },
    });
  };

  handleGoBack = () => {
    const { push, location } = this.props.history;
    push(location.state?.from || "/");
  };

  render() {
    const { isCategoryList, ...dataForm } = this.state;
    const {
      match: { params },
      handleCloseTransaction,
      match,
    } = this.props;
    const title = params.transType === "costs" ? "Расходы" : "Доходы";
    const dataList = params.transType === "costs" ? costsCat : incomesCat;
    return (
      <>
        <Button title="GoBack" cbOnClick={this.handleGoBack} />
        <h1>{title}</h1>
        <TransactionForm
          transType={params.transType}
          dataForm={dataForm}
          handleCloseTransaction={handleCloseTransaction}
          handleOpenCatTrans={this.handleOpenCatTrans}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Switch>
          <Route
            path={match.path + "/cat-list"}
            render={(props) => (
              <CategoriesTransactions
                {...props}
                dataList={dataList}
                handleOpenCatTrans={this.handleOpenCatTrans}
                handleAddCategory={this.handleAddCategory}
              />
            )}
          />
          {/* <Route path={match.path}>
          <>
          <Button title="GoBack" cbOnClick={this.handleGoBack} />
          <h1>{title}</h1>
          <TransactionForm
          transType={params.transType}
          dataForm={dataForm}
          handleCloseTransaction={handleCloseTransaction}
          handleOpenCatTrans={this.handleOpenCatTrans}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          />
          </>
        </Route> */}
        </Switch>
      </>
    );
  }
}

export default TransactionPage;

// !this.state.isCategoryList ? (

// ) : (

// );
