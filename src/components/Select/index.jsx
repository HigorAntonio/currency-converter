import { useState, useEffect, useRef } from "react";

import "./style.css";

function Select({ label, placeholder = "Selecione a moeda", children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutsideCurrencySelect(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false); // Fecha o elemento se o clique foi fora
      }
    }

    document.addEventListener("mousedown", handleClickOutsideCurrencySelect); // Adiciona evento global

    function checkSelectFocus() {
      setIsFocused(document.activeElement === selectRef.current);
    }

    document.addEventListener("focusin", checkSelectFocus);
    document.addEventListener("focusout", checkSelectFocus);

    function handlePressEscapeWithOpenSelect(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handlePressEscapeWithOpenSelect);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutsideCurrencySelect
      ); // Remove ao desmontar

      document.removeEventListener("focusin", checkSelectFocus);
      document.removeEventListener("focusout", checkSelectFocus);

      document.removeEventListener("keydown", handlePressEscapeWithOpenSelect);
    };
  }, []);

  function toggleSelect() {
    setIsOpen((prevState) => !prevState);
  }

  function handleSelectKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Evita que a página role ao pressionar espaço
      toggleSelect();
    }

    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  function handleOptionOnClick(event) {
    event.stopPropagation();
  }

  return (
    <div className="select-wrapper">
      <label className="currency-select-label">{label}</label>
      <div
        className="currency-select"
        onClick={toggleSelect}
        onKeyDown={handleSelectKeyDown}
        tabIndex="0"
        ref={selectRef}
      >
        <p className="currency-select-text">{placeholder}</p>
        <div
          className={`currency-select-icon ${
            isOpen
              ? isFocused
                ? "icon-caret-up-focused"
                : "icon-caret-up"
              : isFocused
              ? "icon-caret-down-focused"
              : "icon-caret-down"
          }`}
        ></div>
        <div
          className={`currency-select-options ${!isOpen && "display-none"}`}
          onClick={handleOptionOnClick}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Select;
