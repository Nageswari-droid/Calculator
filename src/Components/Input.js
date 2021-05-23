import React from "react";
import "../style/Input.css";

function Input({
  setInputOne,
  setInputTwo,
  setError,
  inputOneRef,
  inputTwoRef,
}) {
  const inputBox = (inputId, placeholder, setInputState, inputRef) => {
    return (
      <input
        className="input-box"
        type="text"
        id={inputId}
        autoComplete="off"
        placeholder={placeholder}
        ref={inputRef}
        onChange={(event) => {
          let value = event.currentTarget.value;
          setInputState(parseInt(value));
          setError(false);
        }}
        required
      ></input>
    );
  };

  return (
    <div className="input-class">
      {inputBox("input_one", "Enter any number", setInputOne, inputOneRef)}
      {inputBox("input_two", "Enter any number", setInputTwo, inputTwoRef)}
    </div>
  );
}

export default Input;
