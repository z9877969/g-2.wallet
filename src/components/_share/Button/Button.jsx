const Button = ({ title, type = "button", cbOnClick, className }) => {
  return (
    <button type={type} onClick={cbOnClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
