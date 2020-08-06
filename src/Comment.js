//your code here
import React, { Component } from 'react';

export default class BlogContent extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>  
    )
  }
}