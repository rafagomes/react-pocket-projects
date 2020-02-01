import jsonPlaceholder from '../apis/jsonPlaceholder';
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

export const fetchPosts = () => async (dispatch:Function) => {
    const response = await jsonPlaceholder.get('/posts');
    
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = (id:number) => (dispatch:Function) => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id:number, dispatch:Function) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data});
});