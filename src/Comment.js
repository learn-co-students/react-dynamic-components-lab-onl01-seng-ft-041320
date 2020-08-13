import React, { Component } from 'react';
import { defaultConfig } from 'sinon';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment;