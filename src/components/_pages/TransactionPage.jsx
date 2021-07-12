import TransactionForm from "../TransactionForm/TransactionForm";
import Button from "../_share/Button/Button";

const TransactionPage = ({transType, handleCloseTransaction}) => {

    const title = transType === "costs" ? "Расходы" : "Доходы";

    return (
        <>
        <Button title="GoBack" cbOnClick={handleCloseTransaction}/>
        <h1>{title}</h1>
        <TransactionForm transType={transType} handleCloseTransaction={handleCloseTransaction}/>
        </>
    );
}
 
export default TransactionPage;