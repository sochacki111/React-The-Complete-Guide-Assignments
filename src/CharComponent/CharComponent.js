import React from 'react'

const style = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid black'
};

const charComponent = props => {
  console.log(props.index);
  return (
    <div style={style} onClick={props.click}>
      {props.children}
    </div>
  )
};

export default charComponent;