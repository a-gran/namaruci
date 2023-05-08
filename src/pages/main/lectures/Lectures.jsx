import React from 'react'
import './lectures.scss'

const Lectures = () => {
    return (
        <div className="lectures container">
            <div className="lectures__wrap">
                <div className="lectures__block">
                    <span className="lectures__block-item">
                        Аудиоплеер
                    </span>
                </div>
            </div>
            <div className="lectures__btn-block">
                <a href="#" className="lectures__btn-link">Перейти в лекторий</a>
            </div>
        </div>

    )
}

export default Lectures
