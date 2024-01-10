import React from 'react'
import './Album.scss'
import { Link } from "react-router-dom";

const AlbumItem = (props) => {
    return (
        <div className="albumItem">
            <Link to={`/albums/${props.id}`} className="link">
                <figure>
                    <img className="albumPhoto" alt=''
                        src='https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png' />
                    <figcaption className="caption">
                        <p><strong>Title:</strong> {props.title}</p>
                        <p><strong>Number:</strong> {props.id}</p>
                    </figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default AlbumItem
