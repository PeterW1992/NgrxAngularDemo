import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/counter.action';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.Increment:
            return state + 1;
            break;

        case ActionTypes.Decrement:
            return state - 1;
            break;

        case ActionTypes.Reset:
            return 0;
            break;

        default:
            return state;
            break;
    }
}