import _ from 'lodash';
import {
    GET_STREAM,
    LISTALL_STREAM,
    CREATE_STREAM,
    UPDATE_STREAM,
    DELETE_STREAM
} from '../actions/types';
import {Action} from '../actions';

export default (state = {}, action:Action) => {
    switch(action.type) {
        case LISTALL_STREAM:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case GET_STREAM:
            return {...state, [action.payload.id]:action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]:action.payload};
        case UPDATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};