import React from 'react'
import "./video.scss"

const Video = () => {
    return (
        <div className="container">
            <iframe className="video" width="1280" height="720" src="https://www.youtube.com/embed/cWHTaCZyWcc" title="Что такое Веды? О чём говорят древние ведические тексты на санскрите. Сакральная философия Вед." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default Video
