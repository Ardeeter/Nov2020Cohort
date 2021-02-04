import React from 'react';
import Grandchild from './Grandchild';

const Child = (props) => {
  return (
    <>
      I am a child and my name is {props.sib1}

      < Grandchild />
    </>
  )
}

export default Child
