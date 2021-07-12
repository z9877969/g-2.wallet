const LabelInput = ({title, type="text", name, value, placeholder, cbOnChange }) => {

    // const handleChange = e => console.log('e.target :>> ', e.target);

    return (
        <div>
            <label>
                <p>{title}</p>
                <input type={type} name={name} value={value} placeholder={placeholder} onChange={cbOnChange}/>
            </label>
        </div>
    );
}
 
export default LabelInput;