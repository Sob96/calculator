import { CHANGE_HISTORY, CHANGE_THEME, CHANGE_HIDDEN, CALC, GET_NUM, DO_OTHER_OPER, CLEAN_ALL } from "@/constants"

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


export function calc(payload) {
    return {
        type: CALC,
        payload,
    }
}

export function getNum(payload) {
    return {
        type: GET_NUM,
        payload,
    }
}

export function doOtherOper(payload) {
    return {
        type: DO_OTHER_OPER,
        payload,
    }
}

export function cleanAll(payload) {
    return {
        type: CLEAN_ALL,
        payload,
    }
}