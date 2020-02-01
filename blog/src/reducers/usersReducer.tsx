import {IFetch, User} from '../actions';

type State = User[];

export default (state: State = [], action:IFetch<User>): State  => {
    switch(action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};