import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Friend from './Friend';

class Friends extends React.Component {
    render() {
        return(
            <div className="classList">
                {this.props.friends.map(friend => (
                <Friend key={friend.name} friend={friend} />
                ))}
            </div>
        );
    }
}

export default Friends;
