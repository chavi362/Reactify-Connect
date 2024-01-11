import React from 'react';

import './Photos.scss'
import React from 'react'

const PhotoItem = (props) => {
  return (
    <div>
       <figure className="item" onClick={() => {props.fullSize(props.url)}}>
        <img src={props.thumbnailUrl} alt='' />
        <figcaption>{props.title}</figcaption>
    </figure>
    </div>
  )
}

export default PhotoItem