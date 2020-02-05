import React from 'react';
import useResources from './useResources';

interface User {
    name: string,
    id: number
}

const UserList = () => {
    const users = useResources('users');

    return (
        <ul>
            {users.map((user:User) => <li key={user.id}>{user.name}</li>)}
        </ul>
    );
};

export default UserList;