import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <h1>Sorry, an error accoured while fetching the data</h1>
      <NavLink to="/">Return to home page</NavLink>
    </div>
  )
}

export default Error
