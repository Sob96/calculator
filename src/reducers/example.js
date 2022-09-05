import { AddCommand, AddDotCommand, AddMinusCommand, calculator, CleanLastSymbolCommand, DivideCommand, EuclideanDivisionCommand, IndexOfCommand, MultiplyCommand, RoundCommand, SolveCommand, SubtractCommand } from "@/helpers"

const INITIAL_STATE_CALC = {
    number: '',
    result: '',
    operator: '',
    display: 0,
    history: [],
    hidden: false,
}

const INITIAL_STATE_THEME = {
    theme: 'Light theme',
}



export const calculateReducer = (state = INITIAL_STATE_CALC, action) => {

    switch (action.type) {
        case 'CALC':

            if (!state.result && state.number) {
                return { ...state, number: '', result: state.number, operator: action.payload }
            }
            if (state.result && state.number) {
                let finalResult = Number(state.result)
                switch (state.operator) {
                    case '+':
                        finalResult = calculator.executeCommand(new AddCommand(Number(state.result), Number(state.number)))
                        break
                    case '-':
                        finalResult = calculator.executeCommand(new SubtractCommand(Number(state.result), Number(state.number)))
                        break
                    case '/':
                        finalResult = calculator.executeCommand(new DivideCommand(Number(state.result), Number(state.number)))
                        break
                    case '*':
                        finalResult = calculator.executeCommand(new MultiplyCommand(Number(state.result), Number(state.number)))
                        break
                    case '%':
                        finalResult = calculator.executeCommand(new EuclideanDivisionCommand(Number(state.result), Number(state.number)))
                        break
                }
                const index = calculator.executeCommand(new IndexOfCommand(finalResult))
                if (index > 0) finalResult = calculator.executeCommand(new RoundCommand(String(finalResult), index))
                const updatedHistory = state.operator && state.operator !== '='
                    ? state.history.concat([`${state.result} ${state.operator} ${state.number} = ${finalResult}`])
                    : state.history
                return { ...state, number: '', history: updatedHistory, result: finalResult, display: finalResult, operator: action.payload }
            }
            return { ...state, operator: action.payload }
        case 'GET_NUM':
            if (state.operator !== '' && state.operator !== '=') {
                return { ...state, number: state.number + action.payload, display: state.number + action.payload }

            } else {
                return { ...state, result: '', number: state.number + action.payload, display: state.number + action.payload, operator: '+' }

            }
        case 'DO_OTHER_OPER':
            switch (action.payload) {
                case 'CE':
                    if (String(state.display) === String(state.number)) {
                        if (String(state.display).length <= 1) return {
                            ...state, display: calculator.executeCommand(new SolveCommand(0)),
                            number: calculator.executeCommand(new SolveCommand('')),
                        }
                        return {
                            ...state, display: calculator.executeCommand(new CleanLastSymbolCommand(String(state.display))),
                            number: calculator.executeCommand(new CleanLastSymbolCommand(String(state.number))),
                        }
                    } else {
                        if (String(state.display).length <= 1) return {
                            ...state, display: calculator.executeCommand(new SolveCommand(0)),
                            result: calculator.executeCommand(new SolveCommand('')),
                        }
                        return {
                            ...state, display: calculator.executeCommand(new CleanLastSymbolCommand(String(state.display))),
                            result: calculator.executeCommand(new CleanLastSymbolCommand(String(state.result))),
                        }
                    }

                case 'C':
                    return {
                        ...state, result: calculator.executeCommand(new SolveCommand('')),
                        number: calculator.executeCommand(new SolveCommand('')),
                        display: calculator.executeCommand(new SolveCommand(0)),
                        operator: calculator.executeCommand(new SolveCommand('')),
                    }

                case '.':
                    if (state.operator === '' || state.operator === '=') {
                        if (calculator.executeCommand(new IndexOfCommand(state.result)) < 0) {
                            return {
                                ...state, result: calculator.executeCommand(new SolveCommand('')),
                                operator: calculator.executeCommand(new SolveCommand('+')),
                                number: calculator.executeCommand(new AddDotCommand(state.number)),
                                display: calculator.executeCommand(new AddDotCommand(state.number)),
                            }

                        }
                    } else {
                        if (calculator.executeCommand(new IndexOfCommand(state.number)) < 0) {
                            return {
                                ...state, number: calculator.executeCommand(new AddDotCommand(state.number)),
                                display: calculator.executeCommand(new AddDotCommand(state.number)),
                            }
                        }

                    }
                    break
                case '+/-':
                    if (state.operator === '=') {
                        if (Number(state.result) >= 0) {
                            return {
                                ...state, result: calculator.executeCommand(new AddMinusCommand(state.result)),
                                display: calculator.executeCommand(new AddMinusCommand(state.result)),
                            }
                        } else {
                            return {
                                ...state, result: calculator.undo(new AddMinusCommand(state.result)),
                                display: calculator.undo(new AddMinusCommand(state.result)),
                            }

                        }
                    } else {
                        if (state.number === '') {
                            return {
                                ...state,
                                number: calculator.executeCommand(new SolveCommand('')),
                            }
                        }
                        if (Number(state.number) >= 0) {
                            return {
                                ...state, number: calculator.executeCommand(new AddMinusCommand(state.number)),
                                display: calculator.executeCommand(new AddMinusCommand(state.number)),
                            }
                        } else {
                            return {
                                ...state, number: calculator.undo(new AddMinusCommand(state.number)),
                                display: calculator.undo(new AddMinusCommand(state.number)),
                            }

                        }
                    }

            }
            break
        case 'CHANGE_HISTORY':
            return { ...state, history: action.payload }
        case 'CHANGE_HIDDEN':
            return { ...state, hidden: action.payload }
        case 'CLEAN_ALL':
            return {
                ...state, history: [], number: calculator.executeCommand(new SolveCommand('')),
                result: calculator.executeCommand(new SolveCommand('')),
                display: calculator.executeCommand(new SolveCommand(0)),
                operator: calculator.executeCommand(new SolveCommand('')),
            }
        default: return state
    }
}


export const themeReducer = (state = INITIAL_STATE_THEME, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload }
        default: return state
    }
}






