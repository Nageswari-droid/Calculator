import React from "react";
import "../style/Input.css";

function Input({ setInputOne, setInputTwo, setError, inputOne, inputTwo }) {
  const inputBox = (inputId, placeholder, setInputState, inputValue) => {
    return (
      <input
        className="input-box"
        type="text"
        id={inputId}
        autoComplete="off"
        value = {inputValue}
        placeholder={placeholder}
        onChange={((event)=>{
            let value = event.currentTarget.value;
            setInputState(parseInt(value));
            setError(false);
        })}
        required
      ></input>
    );
  };

  return (
    <div className="input-class">
      {inputBox("input_one", "Enter any number", setInputOne, inputOne)}
      {inputBox("input_two", "Enter any number", setInputTwo, inputTwo)}
    </div>
  );
}

export default Input;
