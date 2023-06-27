import React from 'react'
import css from "./Video.module.scss"

const Video = () => {
    return (
        <div className={css.container}>
            <iframe className={css.video} width="1280" height="720" src="https://www.youtube.com/embed/cWHTaCZyWcc" title="Что такое Веды? О чём говорят древние ведические тексты на санскрите. Сакральная философия Вед." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default Video
