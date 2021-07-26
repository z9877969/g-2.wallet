const LabelInput = ({
  title,
  type = "text",
  name,
  value,
  placeholder,
  cbOnChange,
  cbOnClick,
}) => {
  // const handleChange = e => console.log('e.target :>> ', e.target);

  return (
    <div>
      <label>
        <p>{title}</p>
        {cbOnChange ? (
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={cbOnChange}
          />
        ) : (
          <input type={type} name={name} value={value} onClick={cbOnClick} />
        )}
      </label>
    </div>
  );
};

export default LabelInput;
