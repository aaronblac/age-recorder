import React from 'react';
import Card from '../UI/Card';
import classes from '../../Styles/UserListItem.module.css';

const UserListItem = (props) => {
    
    return(
        <Card>
            <ul className={classes.users}>{props.users.map((user) => {
                return(
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                )
            } )}
            </ul>
        </Card>
    )
}

export default UserListItem;