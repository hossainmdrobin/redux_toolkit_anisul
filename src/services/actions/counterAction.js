import {INCREMENT, DECREMENT, RESET} from './../constants/counterAction'

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}
export const reset = () => {
    return {
        type: RESET
    }
}