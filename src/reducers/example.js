

const INITIAL_STATE = {
    number: '',
    operator: '',
    result: '',
    history: [],
}

export const calculateReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PLUS':
            return { ...state, result: state => state.result + Number(action.payload), number: action.payload }
        default: return state
    }
}


