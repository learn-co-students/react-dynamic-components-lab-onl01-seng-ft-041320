import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let internalBox;
    if (this.props.opacity >= 0.2) {
      internalBox = <ColorBox opacity={this.props.opacity - 0.1} />
    } else {
      internalBox = null
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {internalBox}
      </div>
    )
  }

}

