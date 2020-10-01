const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
//Gets inputs from input fields
function getUserNumberInput() {
    return parseInt(usrInput.value);
}

//Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, PrevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: PrevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialReasult = currentResult
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialReasult, enteredNumber);
    writeToLog('ADD', initialReasult, enteredNumber, currentResult);  
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialReasult = currentResult
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialReasult, enteredNumber);
    writeToLog('SUBTRACT', initialReasult, enteredNumber, currentResult);  

}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialReasult = currentResult
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialReasult, enteredNumber);
    writeToLog('MULTIPLY', initialReasult, enteredNumber, currentResult);  

}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialReasult = currentResult
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialReasult, enteredNumber);
    writeToLog('DIVIDE', initialReasult, enteredNumber, currentResult);  

}


addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)

