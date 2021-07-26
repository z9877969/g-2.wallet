import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import {
  mainInfoBalance,
  mainInfoCosts,
  mainInfoIncomes,
} from "../../assets/mainInfoData.json";

const MainPage = ({ handleOpenTransaction }) => {

  const getDataPeriod = (data, period) => {
    // 
  }

  return (
    <>
      <h1>Журнал расходов</h1>
      <MainInfo
        title="Расходы"
        periodsData={mainInfoCosts}
        transType="costs"
        handleOpenTransaction={handleOpenTransaction}
      />
      <MainInfo
        title="Доходы"
        periodsData={mainInfoIncomes}
        transType="incomes"
        handleOpenTransaction={handleOpenTransaction}
      />
      <MainInfo
        title="Баланс"
        periodsData={mainInfoBalance}
        handleOpenTransaction={handleOpenTransaction}
      />
      <Button title="Все расходы" />
      <Button title="Все доходы" />
    </>
  );
};

export default MainPage;
