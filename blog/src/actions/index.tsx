import jsonPlaceholder from '../apis/jsonPlaceholder';
import { Dispatch } from 'redux';
import _ from 'lodash';

export interface IFetch<T> {
    type: string,
    payload: T
}

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface User {
    id: number,
    name: string
}

export const fetchPostsAndUsers = () => async (dispatch:Function, getState:Function) => {
    await dispatch(fetchPosts());
    
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();

    // lodash unchained version
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch:Dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = (id:number) => async (dispatch:Dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
};

// Memoize approach
// export const fetchUser = (id:number) => (dispatch:Dispatch) => {
//     _fetchUser(id, dispatch);
// };
// const _fetchUser = _.memoize(async (id:number, dispatch:Dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: response.data});
// });