import React from "react";
import './Backdrop.scss'
import React from 'react'

const Backdrop = (props) => {
  return (
    <div>
        props.show ? <div className="backdrop" onClick={props.close}></div> : null
    </div>
  )
}

export default Backdrop
props