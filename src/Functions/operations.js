const operateTwoNumbers = (operation, inputOne, inputTwo, setOutput) => {
  switch (operation) {
    case "Addition": {
      setOutput(inputOne + inputTwo);
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
      setOutput((inputOne / inputTwo).toFixed(5));
      break;
    }
    default:
      setOutput("Output");
  }
};

export default operateTwoNumbers;
