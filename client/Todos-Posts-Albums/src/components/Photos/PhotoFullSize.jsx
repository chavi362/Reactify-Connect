import React from "react";
import './Photos.scss'
import Backdrop from "../Backdrop/Backdrop";

const PhotoFullSize = (props) => {
  return (
    <>
    props.show ?
            <Backdrop show={props.show} close={props.close} />
            <figure className="fullSize" >
                <img src={props.url} alt='' />
            </figure>
    : null
    </>
  )
}

export default PhotoFullSize
