import { Component } from "react";
import TransactionForm from "../TransactionForm/TransactionForm";
import Button from "../_share/Button/Button";
import CategoriesTransactions from "../CategoriesTransactions/CategoriesTransactions";
import { costsCat, incomesCat } from "../../assets/transCategories.json";

class TransactionPage extends Component {
  state = {
    date: "2020-10-07",
    time: "",
    category: this.props.transType === "costs" ? "Еда" : "Зарплата",
    sum: "",
    currency: "UAH",
    comment: "",
    isCategoryList: false,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleInputClick = (value) => {
    this.setState({ category: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { isCategoryList, ...dataForm } = this.state;
    const { transType, handleAddTransaction, handleCloseTransaction } =
      this.props;
    handleAddTransaction({ transType, transaction: dataForm });
    
    handleCloseTransaction();
  };

  handleToggleCatTrans = () => {
    this.setState((prevState) => ({
      isCategoryList: !prevState.isCategoryList,
    }));
  };

  render() {
    const { isCategoryList, ...dataForm } = this.state;
    const { transType, handleCloseTransaction } = this.props;
    const title = transType === "costs" ? "Расходы" : "Доходы";
    const dataList = transType === "costs" ? costsCat : incomesCat;
    return !this.state.isCategoryList ? (
      <>
        <Button title="GoBack" cbOnClick={handleCloseTransaction} />
        <h1>{title}</h1>
        <TransactionForm
          transType={transType}
          dataForm={dataForm}
          handleCloseTransaction={handleCloseTransaction}
          handleToggleCatTrans={this.handleToggleCatTrans}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </>
    ) : (
      <CategoriesTransactions
        dataList={dataList}
        handleToggleCatTrans={this.handleToggleCatTrans}
        handleInputClick={this.handleInputClick}
      />
    );
  }
}

export default TransactionPage;
