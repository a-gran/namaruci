import React from 'react'
import css from './FirstScreen.module.scss'

const FirstScreen = () => {
	return (
		<div className={css.firstScreen}>
			<img
				className={css.fotoDesc}
				src="img/foto-Prabhupada-mobile.png"
				alt="Фото"
			/>

			<div className={css.firstScreenHeaderWrap}>
				<div className={css.firstScreenHeader}>
					<h1 className={`${css.heading} ${css.transition}`}>Харе Кришна!</h1>
					<span className={`${css.greatSong} ${css.transition}`}>Великая песнь</span>
					<span className={`${css.freedom} ${css.transition}`}>освобождения!</span>
				</div>

				<div className={css.fotoDescWrap}>
					<div className={css.textDescWrap}>
						<div className={css.textDescCenter}>
							<div className={`${css.descHeader} ${css.transition}`}>
								Духовный учитель всего мира
							</div>
							<div className={`${css.descHeaderText} ${css.transition}`}>
								Его Божественная Милость Абхай Чаранаравинда Бхактиведанта
								Свами Шрила Прабхупадa
							</div>
						</div>
					</div>

					<a href='#' className={css.aboutAuthor}>
						<span className={css.aboutAuthorHeader}>
							Об авторе
						</span>
					</a>
				</div>

			</div>
		</div>
	)
}

export default FirstScreen
