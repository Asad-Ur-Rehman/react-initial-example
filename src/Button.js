  
import React from 'react';

export const Button = ({ nextStep }) => {
  return (
    <React.Fragment>
      <button onClick={() => nextStep(1)}>next</button>
    </React.Fragment>
  )
}
export default Button; // Don’t forget to use export default!
