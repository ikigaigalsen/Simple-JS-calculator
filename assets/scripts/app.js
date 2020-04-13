//creating all functionnalities that gonna help us to run buttons
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [] ;

function getUserInputValue() {
  return parseInt(userInput.value);
}

//Let's create a resusable function for the object
function writeToLog(operationId, prevResult, userNumber, newResult){

  const logEntry = {
    operation: operationId,
    prevResult: prevResult,
    number: userNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntry);
}

function createAndWriteOutput(operator, resultBefore, resultAfter) {
  const resultDescription = `${resultBefore} ${operator} ${resultAfter}`;
  outputResult(currentResult, resultDescription);
}

function add() {
  const enteredNumber = getUserInputValue();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog('ADDITION', initialResult, enteredNumber, currentResult);

}

function multiply() {
  const enteredNumber = getUserInputValue();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInputValue();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInputValue();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
