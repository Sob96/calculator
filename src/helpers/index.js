// @todo: add some helpers

export function result(expr) {
    const nestedBraces = expr.match(/\((.*)\)/)

    if (nestedBraces) {
        const bracesResult = result(nestedBraces[1])
        return poh(expr.replace(nestedBraces[0], bracesResult))
    } else {
        return poh(expr)
    }
}

function poh(expr) {
    let action = expr.match(/(-?[0-9.]+)([*/%]{1})(-?[0-9.]+)/)
    if (!action) action = expr.match(/(-?[0-9.]+)([+-]{1})(-?[0-9.]+)/)

    console.log(expr, action)

    action = [action[1], action[2], action[3]].join('')

    if (action !== expr) {
        return poh(expr.replace(action, calculate(action)))
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