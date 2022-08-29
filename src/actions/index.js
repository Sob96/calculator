import { CHANGE_HISTORY, SET_RESULT, SET_NUMBER, SET_DISPLAY, SET_OPERATOR, ADD_NUMBER, ADD_DISPLAY, CHANGE_THEME, CHANGE_HIDDEN } from "@/constants"

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

export function changeTheme(payload) {
    return {
        type: CHANGE_THEME,
        payload,
    }
}

export function changeHidden(payload) {
    return {
        type: CHANGE_HIDDEN,
        payload,
    }
}