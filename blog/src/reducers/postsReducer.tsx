import {IFetch, Post} from '../actions';

type State = Post[];

export default (state: State = [], action:IFetch<State>): State => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};