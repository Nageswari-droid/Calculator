import React, { useState } from "react";
import Input from "./Input";
import "../style/Calculator.css";

function Calculator() {
  const operateTwoNumbers = (operation, inputOne, inputTwo, setOutput) => {
    switch (operation) {
      case "Addition": {
        setOutput(parseInt(inputOne) + parseInt(inputTwo));
        break;
      }
      case "Subtraction": {
        setOutput(inputOne - inputTwo);
        break;
      }
      case "Multiplication": {
        setOutput(inputOne * inputTwo);
        break;
      }
      case "Division": {
        setOutput(inputOne / inputTwo);
        break;
      }
      default:
        setOutput("Output");
    }
  };

  const operations = [
    { operation: "Addition", operator: "+" },
    { operation: "Subtraction", operator: "-" },
    { operation: "Multiplication", operator: "*" },
    { operation: "Division", operator: "/" },
  ];

  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);

  const [output, setOutput] = useState("Output");

  return (
    <div className="calculator">
      <div className="calculator-child">
        <div className="form-class">
          <Input setInputOne={setInputOne} setInputTwo={setInputTwo}></Input>
          <div className="operator">
            {operations && operations.length > 0
              ? operations.map((items) => {
                  const { operation, operator } = items;
                  return (
                    <div
                      key={operation}
                      className="operation-class"
                      onClick={() => {
                        operateTwoNumbers(
                          operation,
                          inputOne,
                          inputTwo,
                          setOutput
                        );
                      }}
                    >
                      {operator}
                    </div>
                  );
                })
              : " "}
          </div>
          <div className="clear-class">
            <div className="clear-child-class">Clear</div>
          </div>
          <div className="output-class">{output}</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
