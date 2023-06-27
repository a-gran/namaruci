import React from 'react'
import css from './Lectures.module.scss'

const Lectures = () => {
    return (
        <div className={css.container}>
            <div className={css.lectures}>
                <div className={css.lecturesBlock}>
                    <span className={css.lecturesBlockItem}>
                        Аудиоплеер
                    </span>
                </div>
            </div>
            <div className={css.lecturesBtnBlock}>
                <a href="#" className={css.lecturesBtnLink}>Перейти в лекторий</a>
            </div>
        </div>
    )
}

export default Lectures
