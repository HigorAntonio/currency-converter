import "./style.css";

function Option({ children }) {
  return (
    <div className="currency-option" tabIndex="0">
      {children}
    </div>
  );
}

export default Option;
