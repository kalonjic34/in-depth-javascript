const calculator = (num1, num2, operator) => {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        default:
            result = 'Invalid operator'
            break;
    }
    console.log(result);
    return result
}
calculator(5, 2, '*')

