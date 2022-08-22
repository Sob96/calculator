export function result(expr) {
    const brackets = expr.match(/\((.*)\)/)

    if (brackets) {
        const bracesResult = result(brackets[1])
        return search(expr.replace(brackets[0], bracesResult))
    } else {
        return search(expr)
    }
}

function search(expr) {
    let action = expr.match(/(-?[0-9.]+)([*/%]{1})(-?[0-9.]+)/)
    if (!action) action = expr.match(/(-?[0-9.]+)([+-]{1})(-?[0-9.]+)/)

    action = [action[1], action[2], action[3]].join('')

    if (action !== expr) {
        return search(expr.replace(action, calculate(action)))
    } else {
        return calculate(action)
    }
}

function calculate(expr) {
    const action = expr.match(/(-?[0-9.]+)([*/%+-]{1})(-?[0-9.]+)/)
    const firstNumber = Number(action[1])
    // eslint-disable-next-line prefer-destructuring
    const operator = action[2]
    const secondNumber = Number(action[3])

    switch (operator) {
        case '+': return firstNumber + secondNumber
        case '-': return firstNumber - secondNumber
        case '*': return firstNumber * secondNumber
        case '/': return firstNumber / secondNumber
        case '%': return firstNumber % secondNumber
    }
}