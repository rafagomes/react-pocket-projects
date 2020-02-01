import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
    posts: postsReducer,
    users: usersReducer
});

export default reducers;
export type AppReducer = ReturnType<typeof reducers>;
