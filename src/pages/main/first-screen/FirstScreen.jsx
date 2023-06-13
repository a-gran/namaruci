import React from 'react'
import css from './FirstScreen.module.scss'

const FirstScreen = () => {
    return (
        <div className={css.firstScreen}>
            <div className={css.firstScreenHeader}>
                <h1 className={css.heading}>Харе Кришна!</h1>
                <span className={css.greatSong}>Великая песнь</span>
                <span className={css.freedom}>освобождения!</span>
            </div>

            <div className={css.fotoDescWrap}>
                <img className={css.fotoDesc}
                    src="img/foto-Prabhupada-mobile.png" alt="Фото"
                />
                <div className={css.textDescWrap}>
                    <div className={css.textDescCenter}>
                        <div className={css.descHeader}>
                            Духовный учитель всего мира
                        </div>
                        <div className={css.descHeaderText}>
                            Его Божественная Милость Абхай Чаранаравинда Бхактиведанта
                            Свами Шрила Прабхупадa
                        </div>
                    </div>
                </div>
            </div>

            <a href='#' className={css.aboutAuthor}>
                <span className={css.aboutAuthorHeader}>
                    Об авторе
                </span>
            </a>
        </div>
    )
}

export default FirstScreen
