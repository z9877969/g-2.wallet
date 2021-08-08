import { useHistory} from "react-router-dom";

import Button from "../_share/Button/Button";

const MainInfo = ({ title, periodsData, handleOpenTransaction, transType }) => {
  const history = useHistory();
  // const location = useLocation();

  const newLocation = {
    pathname: `/transaction/${transType}`,
    state: {
      str: "any string",
      from: history.location,
    },
  };

  const cbOpenTransaction = () => history.push(newLocation);
  return (
    <>
      <h2>{title}</h2>
      <Button title="Add" cbOnClick={cbOpenTransaction} />
      <p>UAH</p>
      <ul>
        {periodsData.map(({ period, sum }) => (
          <li key={period}>
            <span>{period}</span>
            <span>{sum}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainInfo;
