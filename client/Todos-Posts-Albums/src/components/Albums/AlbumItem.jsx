import React from 'react'
import { Link } from "react-router-dom";
const AlbumItem = (props) => {
    return (
        <div className="albumItem">
            <Link to={`${props.id}/photos?albumId=${props.id}`} className="link">
                <div className="card">
                    <img className="card-img-top" alt='album' src='https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png' />
                    <div className="card-body">
                        <p><strong>Title:</strong> {props.title}</p>
                        <p><strong>Number:</strong> {props.id}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}


export default AlbumItem
