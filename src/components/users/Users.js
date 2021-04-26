import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

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

Users.PropTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Users;
