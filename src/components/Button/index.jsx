import "./style.css";

function Button({ children, ...rest }) {
  return (
    <button {...rest} className="btn">
      {children}
    </button>
  );
}

export default Button;
