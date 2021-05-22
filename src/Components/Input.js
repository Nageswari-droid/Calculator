import React from "react";
import "../style/Input.css";

function Input({ setInputOne, setInputTwo }) {
  const inputBox = (inputId, placeholder, setInputState) => {
    return (
      <input
        className="input-box"
        type="text"
        id={inputId}
        placeholder={placeholder}
        autoComplete="off"
        onChange={((event)=>{
            setInputState(event.currentTarget.value);
        })}
      ></input>
    );
  };

  return (
    <div className="input-class">
      {inputBox("input_one", "Enter any number", setInputOne)}
      {inputBox("input_two", "Enter any number", setInputTwo)}
    </div>
  );
}

export default Input;
