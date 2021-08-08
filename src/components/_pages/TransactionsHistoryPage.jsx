import { Link, useParams } from "react-router-dom";
import Button from "../_share/Button/Button";
import LabelInput from "../_share/LabelInput/LabelInput";

const options = [
  { title: "День", value: "day" },
  { title: "Неделя", value: "week" },
  { title: "Месяц", value: "month" },
  { title: "Год", value: "year" },
  { title: "Всё время", value: "allTime" },
];

const TransactionsHistoryPage = ({ costs, incomes }) => {
  const params = useParams();

  const { transType } = params;

  const transactions = transType === "costs" ? costs : incomes;

  const allSum = transactions.reduce((acc, el) => {
    acc += Number(el.sum);
    return acc;
  }, 0);
  return (
    <>
      <Link to="/">GoBack</Link>
      <select name="period">
        {options.map(({ title, value }) => (
          <option value={value}>{title}</option>
        ))}
      </select>
      <div style={{ display: "flex" }}>
        <Button title="prev" />
        <LabelInput title="8/08/2021" type="date" name="date" />
        <Button title="next" />
      </div>
      <table>
        <tr>
          <th>Всего:</th>
          <th>{allSum}</th>
        </tr>
        {transactions.map(({ category, sum }) => (
          <tr>
            <td>{category}</td>
            <td>
              <span>{sum}</span>
              <Link to="">{"=>"}</Link>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default TransactionsHistoryPage;
