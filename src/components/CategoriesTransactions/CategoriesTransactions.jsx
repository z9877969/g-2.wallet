import { Component } from "react";
import Button from "../_share/Button/Button";

class CategoriesTransactions extends Component {
  state = {
    newCategory: "",
  };

  handleNewCategory = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateFormCat = (value) => {
    const { handleAddCategory } = this.props;
    handleAddCategory(value);
    this.handleGoBack();
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.push(history.location.state?.from || "/");
  };

  // handleGoBackToPrev = () => {
  //   const { history } = this.props;
  //   history.push(history.location.state?.fromPrev || "/");
  // };

  render() {
    const { dataList } = this.props;

    return (
      <>
        {/* <Button title="GoBackToPrev" cbOnClick={this.handleGoBackToPrev} /> */}
        <Button title="GoBack" cbOnClick={this.handleGoBack} />
        <h1>Категории</h1>
        <ul>
          {dataList.map((dataItem) => (
            <li key={dataItem.title}>
              <button
                type="button"
                style={{ border: "none" }}
                onClick={() => this.updateFormCat(dataItem.title)}
              >
                {dataItem.title}
              </button>
              <Button title="..." />
            </li>
          ))}
        </ul>
        <form>
          <input
            type="text"
            name="newCategory"
            value={this.state.newCategory}
            placeholder="Новая категория"
            onChange={this.handleNewCategory}
          />
          <Button title="Add" type="submit" />
        </form>
      </>
    );
  }
}

export default CategoriesTransactions;
