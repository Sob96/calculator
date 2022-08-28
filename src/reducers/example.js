const INITIAL_STATE = {
    number: '',
    result: '',
    operator: '',
    display: '',
    history: [],
    theme: 'lightTheme',
}

export const calculateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_NUMBER':
            return { ...state, number: action.payload }

        case 'SET_RESULT':
            return { ...state, result: action.payload }
        case 'SET_DISPLAY':
            return { ...state, display: action.payload }
        case 'SET_OPERATOR':
            return { ...state, operator: action.payload }
        case 'ADD_NUMBER':
            return { ...state, number: state.number + action.payload }
        case 'ADD_DISPLAY':
            return { ...state, display: state.number + action.payload }

        default: return state
    }
}

export const historyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_HISTORY':
            return { ...state, history: action.payload }
        default: return state
    }
}




