// import {Fragment} from 'react';

import Button from "../_share/Button/Button"

const MainInfo = ({title, periodsData, handleOpenTransaction, transType}) => {
    const cbOpenTransaction = () => handleOpenTransaction(transType)
    return (
        <>
            <h2>{title}</h2>
            <Button title="Add" cbOnClick={cbOpenTransaction}/>
            <p>UAH</p>
            <ul>
                {
                    periodsData.map(({period, sum}) => (
                        <li key={period}>
                            <span>{period}</span>
                            <span>{sum}</span>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
 
export default MainInfo;