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
            <div className="set__btn-block">
                <div className="set__btn-link">Перейти в лекторий</div>
            </div>
        </div>

    )
}

export default Lectures
