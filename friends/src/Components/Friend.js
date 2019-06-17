import React from 'react';

class Friend extends React.Component {
  render() {
    return (
      <div className="friendCard">
        <div className="friendInfo">
          <h3>{this.props.friend.name}</h3>
          <p>
            <strong>Name:</strong> {this.props.friend.name}
          </p>
          <p>
            <strong>Age:</strong> {this.props.friend.age}
          </p>
          <p>
            <strong>Email:</strong>{' '}
            {this.props.friend.email}
          </p>
        </div>
      </div>
    );
  }
}

export default Friend;