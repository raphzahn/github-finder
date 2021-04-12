import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
    render() {
        return (
            <div className="user-cards">
                { this.props.users.map(user => (
                    <UserItem className="" key={user.id} user={user}/>
                ))}
            </div>
        )
    }
}

export default Users;
