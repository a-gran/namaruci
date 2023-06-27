import React from 'react'
import css from './Team.module.scss'

const Team = () => {
    return (
        <div className={css.container}>
            <h2 className={css.teamHeader}>Наша команда</h2>
            <div className={css.teamCards}>
                <div className={css.teamCard}>
                    <img
                        src="img/bloger.png"
                        alt="статья" />
                    <div className={css.teamDescHeader}>
                        Видеоблогер
                    </div>
                    <div className={css.sendBtn}>
                        Отправить заявку
                    </div>
                </div>

                <div className={css.teamCard}>
                    <img
                        src="img/copywriter.png"
                        alt="статья" />
                    <div className={css.teamDescHeader}>
                        Видеоблогер
                    </div>
                    <div className={css.sendBtn}>
                        Отправить заявку
                    </div>
                </div>

                <div className={css.teamCard}>
                    <img
                        src="img/smm.png"
                        alt="статья" />
                    <div className={css.teamDescHeader}>
                        Видеоблогер
                    </div>
                    <div className={css.sendBtn}>
                        Отправить заявку
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
