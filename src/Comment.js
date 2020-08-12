import React, { Component } from 'react';

export default class Comment extends Component {

  render() {
    return (
      <div className="comment" style={{opacity: 1}}>
        {this.props.commentText}
      </div>
    )
  }

}
