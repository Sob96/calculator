class Calculator {

    executeCommand(command) {
        return command.execute()
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
        return this.value.slice(0, this.index + 4).replace(/0*$/, "")
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


export const generateId = index => Math.floor(Math.random() * (1000 - index + 1)) + index



