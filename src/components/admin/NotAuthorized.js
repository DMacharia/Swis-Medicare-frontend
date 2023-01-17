import React from 'react'

const NotAuthorized = () => {
  return (
    <div style={{
        width: '50%',
        justifyContent: 'center',
        margin: 'auto',
        paddingTop: '20rem',
    }}>
        <h1>Oops!</h1>
        <h2>You are not authorized to enter this page!</h2>
        <h3>Please Go back ASAP</h3>
    </div>
  )
}

export default NotAuthorized