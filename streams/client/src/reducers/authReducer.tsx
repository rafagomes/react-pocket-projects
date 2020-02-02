import {Action} from '../actions';
import {SIGN_IN, SIGN_OUT} from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    googleId: null
}

export default (state = INITIAL_STATE, action:Action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, googleId: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false, googleId: null};
            
        default:
            return state;
    }
};