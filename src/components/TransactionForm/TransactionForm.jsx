import { Component } from "react";
import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";
import css from "./TransactionForm.module.css";

const TransactionForm = ({ dataForm, handleFormSubmit, handleInputChange, handleToggleCatTrans }) => {
  const { date, time, category, sum, currency, comment } = dataForm;

  return (
    <form onSubmit={handleFormSubmit}>
      <Button title="OK" type="submit" className={css.button} />
      <LabelInput
        title="День"
        type="date"
        name="date"
        value={date}
        cbOnChange={handleInputChange}
      />
      <LabelInput
        title="Время"
        type="time"
        name="time"
        value={time}
        cbOnChange={handleInputChange}
      />
      <LabelInput
        title="Категория"
        type="button"
        name="category"
        value={category}
        // cbOnChange={handleInputChange}
        cbOnClick={handleToggleCatTrans}
      />
      <LabelInput
        title="Сумма"
        name="sum"
        value={sum}
        placeholder="Введите сумму"
        cbOnChange={handleInputChange}
      />
      <LabelInput
        title="Валюта"
        type="button"
        name="currency"
        value={currency}
        cbOnChange={handleInputChange}
      />
      <LabelInput
        name="comment"
        value={comment}
        placeholder="Комментарий"
        cbOnChange={handleInputChange}
      />
    </form>
  );
};

export default TransactionForm;
