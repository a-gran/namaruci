import React from 'react'
import css from './Socials.module.scss'

const Socials = () => {
    return (
        <div className={css.container}>
            <h2 className={css.socialHeader}>Мы в контакте</h2>
            <div className={css.socialWrap}>
                <div className={css.socialBlock}>
                    <span className={css.socialBlockItem}>
                        Блок ленты из ВК
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Socials
