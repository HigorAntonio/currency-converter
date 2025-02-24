import "./style.css";

function Input({ label, ...rest }) {
  return (
    <div className="input-wrapper">
      <label htmlFor="input-component" className="currency-input-label">
        {label}
      </label>
      <input
        placeholder="0,00"
        {...rest}
        className="currency-input"
        id="input-component"
      />
    </div>
  );
}

export default Input;
