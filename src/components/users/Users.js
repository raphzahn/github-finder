import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({users, loading}) => {
    if(loading){
        return <Spinner />
    }else{
        return (
            <div className="user-cards">
                { users.map(user => (
                    <UserItem className="" key={user.id} user={user}/>
                ))}
            </div>
        )
    }
    
}

export default Users;
