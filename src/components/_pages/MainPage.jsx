import { useLocation, Link } from "react-router-dom";
import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import Section from '../_share/Section/Section';
import {
  mainInfoBalance,
  mainInfoCosts,
  mainInfoIncomes,
} from "../../assets/mainInfoData.json";

const MainPage = ({}) => {
  const location = useLocation();

  return (
    <Section>
      <h1>Журнал расходов</h1>
      <MainInfo title="Расходы" periodsData={mainInfoCosts} transType="costs" />
      <MainInfo
        title="Доходы"
        periodsData={mainInfoIncomes}
        transType="incomes"
      />
      <MainInfo title="Баланс" periodsData={mainInfoBalance} />
      <Link to={"/history/costs"}>Все расходы</Link>
      <Link to={"history/incomes"}>Все доходы</Link>
    </Section>
  );
};

export default MainPage;
