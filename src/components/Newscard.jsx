import React from 'react'
import news_image from './news_image.jpg'

function Newscard({ title, description, src, url }) {
    return (
        <div id='newscard' className="d-inline-block">
            <div id='childnewscard' className="card bg-dark text-light">
                <img src={src ? src : news_image} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description ? description.slice(0, 90) : 'No description'}</p>
                    <a href={url} className="btn">Read Article <i className="fa-solid fa-arrow-right ml-5"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Newscard
