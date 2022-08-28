export const resultExpression = expr => {
    const brackets = expr.match(/\((.*)\)/)

    if (brackets) {
        const bracesResult = resultExpression(brackets[1])
        return search(expr.replace(brackets[0], bracesResult))
    } else {
        return search(expr)
    }
}

const search = expr => {
    let action = expr.match(/(-?[0-9.]+)([*/%]{1})(-?[0-9.]+)/)
    if (!action) action = expr.match(/(-?[0-9.]+)([+-]{1})(-?[0-9.]+)/)

    action = [action[1], action[2], action[3]].join('')

    if (action !== expr) {
        return search(expr.replace(action, calculateExpression(action)))
    } else {
        return calculateExpression(action)
    }
}

const calculateExpression = expr => {
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























class Calculator {
    // constructor() {
    //     // this.value = 0
    //     // this.history = []
    // }

    executeCommand(command) {
        return command.execute()
        // this.value = command.execute(this.value)
        // this.history.push(command)
    }

    undo(command) {
        return command.undo()
    }

}

export class AddCommand {
    constructor(firstNumber, lastNumber) {
        this.firstNumber = firstNumber
        this.lastNumber = lastNumber
    }

    execute() {
        return this.firstNumber + this.lastNumber
    }

    undo() {
        return this.firstNumber - this.lastNumber
    }
}

export class SubtractCommand {
    constructor(firstNumber, lastNumber) {
        this.firstNumber = firstNumber
        this.lastNumber = lastNumber
    }

    execute() {
        return this.firstNumber - this.lastNumber
    }

    undo() {
        return this.firstNumber + this.lastNumber
    }
}

export class MultiplyCommand {
    constructor(firstNumber, lastNumber) {
        this.firstNumber = firstNumber
        this.lastNumber = lastNumber
    }

    execute() {
        return this.firstNumber * this.lastNumber
    }

    undo() {
        return this.firstNumber / this.lastNumber
    }
}

export class DivideCommand {
    constructor(firstNumber, lastNumber) {
        this.firstNumber = firstNumber
        this.lastNumber = lastNumber
    }

    execute() {
        return this.firstNumber / this.lastNumber
    }

    undo() {
        return this.firstNumber * this.lastNumber
    }
}

export class EuclideanDivisionCommand {
    constructor(firstNumber, lastNumber) {
        this.firstNumber = firstNumber
        this.lastNumber = lastNumber
    }

    execute() {
        return this.firstNumber % this.lastNumber
    }
}

export class CleanLastSymbolCommand {
    constructor(value) {
        this.value = value
    }

    execute() {
        return this.value.slice(0, -1)
    }

    undo() {
        return this.value.slice(0)
    }
}

export class SolveCommand {
    constructor(value) {
        this.value = value
    }

    execute() {
        return this.value
    }
}

export class AddDotCommand {
    constructor(value) {
        this.value = value
    }

    execute() {
        return this.value + '.'
    }

    undo() {
        return this.value.slice(0, -1)
    }
}

export class AddMinusCommand {
    constructor(value) {
        this.value = value
    }

    execute() {
        return '-' + this.value
    }

    undo() {
        return String(this.value).slice(1)
    }
}

export class RoundCommand {
    constructor(value, index) {
        this.index = index
        this.value = value
    }

    execute() {
        return this.value.slice(0, this.index + 4)
    }

    undo() {
        return this.value.slice(0)
    }

}

export class IndexOfCommand {
    constructor(value) {
        this.value = value
    }

    execute() {
        return String(this.value).indexOf('.')
    }

    undo() {
        return null
    }

}

export const calculator = new Calculator()

// calculator.executeCommand(new AddCommand(10))
// calculator.executeCommand(new MultiplyCommand(2))
// console.log(typeof calculator.value) // 20
// calculator.undo(new MultiplyCommand(2))
// console.log(calculator.value) // 10