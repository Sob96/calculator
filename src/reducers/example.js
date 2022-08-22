const INITIAL_STATE = {
    number: '',
    history: [],
    theme: 'lightTheme',
}

export const calculateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_SYMBOL':
            return { ...state, number: state.number + action.payload }

        case 'SET_RESULT':
            return { ...state, number: action.payload }
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




