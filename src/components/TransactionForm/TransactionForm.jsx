import { Component } from 'react';
import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";
import css from './TransactionForm.module.css';

class TransactionForm extends Component  {

    state = {
        date: "2020-10-07",
        time: "",
        category: this.props.transType === "costs" ? "Еда" : "Зарплата",
        sum: "",
        currency: "UAH",
        comment: ""
    }

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleFormSubmit = e => {
        e.preventDefault();
        
        const {transType, handleCloseTransaction} = this.props;

        const dataFromLS = localStorage.getItem(transType);
        const dataParse = dataFromLS === null ? [] : JSON.parse(dataFromLS);
        const dataToLS = JSON.stringify([...dataParse, this.state]);
        localStorage.setItem(transType, dataToLS);
        handleCloseTransaction();
    }

    render() {
        const {date, time, category, sum, currency, comment} = this.state;

        return (
            <form onSubmit={this.handleFormSubmit} >
                <Button title="OK" type="submit" className={css.button}/>
                <LabelInput title="День" type="date" name="date" value={date} cbOnChange={this.handleInputChange} />
                <LabelInput title="Время" type="time" name="time" value={time}  cbOnChange={this.handleInputChange} />
                <LabelInput title="Категория" type="button" name="category" value={category}  cbOnChange={this.handleInputChange} />
                <LabelInput title="Сумма" name="sum" value={sum} placeholder="Введите сумму"  cbOnChange={this.handleInputChange} />
                <LabelInput title="Валюта" type="button" name="currency" value={currency}  cbOnChange={this.handleInputChange} />
                <LabelInput name="comment" value={comment} placeholder="Комментарий"  cbOnChange={this.handleInputChange} />
            </form>
        );
    }
}
 
export default TransactionForm;