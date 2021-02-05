import React from 'react'

const Contacts = (props) => {
  return (
    <>
    <h1>{props.firstName} {props.lastName}</h1>
    {props.phone} {props.email}
    </>
  )
}

export default Contacts
