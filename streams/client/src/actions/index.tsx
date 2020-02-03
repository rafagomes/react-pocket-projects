import streams from '../apis/streams';
import history from '../history';
import {
    SIGN_IN, 
    SIGN_OUT, 
    CREATE_STREAM, 
    LISTALL_STREAM, 
    GET_STREAM, 
    UPDATE_STREAM, 
    DELETE_STREAM
} from './types';
import { Dispatch } from 'redux';

export interface Action {
    type: string,
    payload: any
}

export interface Stream {
    id: number,
    title: string,
    description: string,
    googleId: string
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


export const listAllStreams = () => async (dispatch:Dispatch) => {
    const response = await streams.get('/streams');
    
    dispatch({type: LISTALL_STREAM, payload: response.data});
};

export const getStream = (id:number) => async (dispatch:Dispatch) => {
    const response = await streams.get(`/streams/${id}`);
    
    dispatch({type: GET_STREAM, payload: response.data});
};

export const createStream = (formValues:FormData) => async (dispatch:Dispatch, getState:Function) => {
    const {googleId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, googleId});

    dispatch({type: CREATE_STREAM, payload: response.data});
    history.push('/');
};

export const updateStream = (id:number, formValues:FormData) => async (dispatch:Dispatch) => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    
    dispatch({type: UPDATE_STREAM, payload: response.data});
    history.push('/');
};


export const deleteStream = (id:number) => async (dispatch:Dispatch) => {
    await streams.put(`/streams/${id}`);
    
    dispatch({type: DELETE_STREAM, payload: id});
};