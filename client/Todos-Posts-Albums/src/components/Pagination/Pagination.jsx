import React from 'react'
import './Pagination.scss'
const Pagination = (props) => {
  return (
    <div>
        {props.isPrev ? <button className="button" onClick={props.prevPage}>Prev</button> : null}
        <span className="indicator">{props.current ? props.current : null}</span>
        {props.isNext ? <button className="button" onClick={props.nextPage}>Next</button> : null}
    </div>
  )
}
export default Pagination
