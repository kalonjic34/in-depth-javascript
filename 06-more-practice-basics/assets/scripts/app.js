const defaultResult = 0
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput(){
    return parseFloat(usrInput.value)
}

// Generates and writes calculation log
function createAndWriteLog(operator,resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription); // from vendor file

}

function add(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult += enteredNumber;
    createAndWriteLog('+',initialResult, enteredNumber)
    logEntries.push(enteredNumber);
    console.log(logEntries[0]);
};

function substract(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult -= enteredNumber;
    createAndWriteLog('-',initialResult, enteredNumber)
}

function multiply(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult *= enteredNumber;
    createAndWriteLog('*',initialResult, enteredNumber)
}

function divide(){
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult /= enteredNumber;
    createAndWriteLog('/',initialResult, enteredNumber)
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',substract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);