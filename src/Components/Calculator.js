import React, { useState, useRef } from "react";
import Input from "./Input";
import validate from "../Functions/validate";
import operateTwoNumbers from "../Functions/operations";
import "../style/Calculator.css";

function Calculator() {
  const operations = [
    { operation: "Addition", operator: "+", id: "plus" },
    { operation: "Subtraction", operator: "-", id: "minus" },
    { operation: "Multiplication", operator: "*", id: "multiply" },
    { operation: "Division", operator: "/", id: "divide" },
  ];

  const [inputOne, setInputOne] = useState(" ");
  const [inputTwo, setInputTwo] = useState(" ");

  const [output, setOutput] = useState("Output");

  let inputOneRef = useRef();
  let inputTwoRef = useRef();

  const [error, setError] = useState(false);

  return (
    <div className="calculator">
      <div className="calculator-child">
        {error ? (
          <div className="error-class">Check the inputs again</div>
        ) : (
          " "
        )}
        <div className="form-class">
          <Input
            setInputOne={setInputOne}
            setInputTwo={setInputTwo}
            inputOneRef={inputOneRef}
            inputTwoRef={inputTwoRef}
            setError={setError}
          ></Input>
          <div className="operator">
            {operations && operations.length > 0
              ? operations.map((items) => {
                  const { operation, operator, id } = items;
                  return (
                    <div
                      key={id}
                      className="operation-class"
                      id={id}
                      onClick={() => {
                        if (validate(inputOne, inputTwo, setError)) {
                          operateTwoNumbers(
                            operation,
                            inputOne,
                            inputTwo,
                            setOutput
                          );
                        } else {
                          setError(true);
                        }
                      }}
                    >
                      {operator}
                    </div>
                  );
                })
              : " "}
          </div>
          <div className="clear-class">
            <div
              className="clear-child-class"
              id="clear"
              onClick={() => {
                inputOneRef.current.value = " ";
                inputTwoRef.current.value = " ";

                setOutput("Output");
                setError(false);
              }}
            >
              Clear
            </div>
          </div>
          <div className="output-class" id="output">
            {output}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
