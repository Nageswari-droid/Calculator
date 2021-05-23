import React from "react";
import "../style/Input.css";

function Input({
  setInputOne,
  setInputTwo,
  setError,
  inputOneRef,
  inputTwoRef,
  inputOne,
  inputTwo,
}) {
  const inputBox = (inputId, setInputState, inputRef, inputValue) => {
    return (
      <input
        className="input-box"
        type="number"
        id={inputId}
        autoComplete="off"
        placeholder={inputValue}
        ref={inputRef}
        onChange={(event) => {
          let value = event.currentTarget.value;
          if (value) {
            setInputState(parseInt(value));
          } else {
            setInputState(0);
          }
          setError(false);
        }}
        required
      ></input>
    );
  };

  return (
    <div className="input-class">
      {inputBox("input_one", setInputOne, inputOneRef, inputOne)}
      {inputBox("input_two", setInputTwo, inputTwoRef, inputTwo)}
    </div>
  );
}

export default Input;
