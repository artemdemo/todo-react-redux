import * as constants from '../constants';
import todo from './todo';

export default function todos(state = [], action) {
    switch (action.type) {
        case  constants.ADD_TODO:
            // Reducer will return all previous items and include the new one at the end of array
            return [
                ...state,
                todo(undefined, action)
            ];
        case constants.TOGGLE_TODO:
            // Since reducer should be pure function we can't mutate given state,
            // instead we will produce the new one
            return state.map(t => todo(t, action));
        default:
            // If action is unknown reducer should return current state for any unknown action
            return state;
    }
}
