import { CHANGE_HISTORY, SET_RESULT, SET_NUMBER, SET_DISPLAY, SET_OPERATOR, ADD_NUMBER, ADD_DISPLAY } from "@/constants"

export function setNumber(payload) {
    return {
        type: SET_NUMBER,
        payload,
    }
}

export function setResult(payload) {
    return {
        type: SET_RESULT,
        payload,
    }
}

export function setDisplay(payload) {
    return {
        type: SET_DISPLAY,
        payload,
    }
}

export function setOperator(payload) {
    return {
        type: SET_OPERATOR,
        payload,
    }
}


export function addNumber(payload) {
    return {
        type: ADD_NUMBER,
        payload,
    }
}

export function addDisplay(payload) {
    return {
        type: ADD_DISPLAY,
        payload,
    }
}



export function changeHistory(payload) {
    return {
        type: CHANGE_HISTORY,
        payload,
    }
}