import {SIGN_IN, SIGN_OUT} from './types';

export interface Action {
    type: string,
    payload: any
}

export const signIn = (googleID:string) => {
    return {
        type: SIGN_IN,
        payload: googleID
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};