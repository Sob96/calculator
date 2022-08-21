import { CHANGE_HISTORY, ADD_SYMBOL, SET_RESULT } from "@/constants"

export function addSymbol(payload) {
    return {
        type: ADD_SYMBOL,
        payload,
    }
}


export function setResult(payload) {
    return {
        type: SET_RESULT,
        payload,
    }
}

export function changeHistory(payload) {
    return {
        type: CHANGE_HISTORY,
        payload,
    }
}