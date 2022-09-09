import { Action } from './actions';

export interface TokenState {
    tokens: string
}

const InitialState = {
    tokens: ''
}

export const TokenReducer = (state: TokenState = InitialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {
            return { tokens: action.payload }
        }
        default:
            return state
    }
}