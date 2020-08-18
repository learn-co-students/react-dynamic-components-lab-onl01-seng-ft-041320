import React, { Component } from 'react';

export default function ColorBox (props){

  
  return (
    
    <div className="color-box" style={{opacity: props.opacity /*replace null with the value*/}}>
      {props.opacity < .2 ? null : <ColorBox opacity={props.opacity - .1}/>}
    </div>
  )
  

}

