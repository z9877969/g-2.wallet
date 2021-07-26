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

  render() {
    const { dataList, handleToggleCatTrans, handleInputClick } = this.props;

    const updateFormCat = (value) => {
      handleInputClick(value);
      handleToggleCatTrans();
    };

    return (
      <>
        <Button title="GoBack" cbOnClick={handleToggleCatTrans} />
        <h1>Категории</h1>
        <ul>
          {dataList.map((dataItem) => (
            <li key={dataItem.title}>
              <button
                type="button"
                style={{ border: "none" }}
                onClick={() => updateFormCat(dataItem.title)}
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
