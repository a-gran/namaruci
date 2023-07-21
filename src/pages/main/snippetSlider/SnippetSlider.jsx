import React from 'react'
import css from './SnippetSlider.module.scss'

const SnippetSlider = () => {
	return (
		<div className={`${css.container} ${css.snippet}`}>
			<div className={css.snippetPoem}>
				<h2 className={css.snippetHeader}>Шримад - Бхагаватам</h2>
				<div className={css.snippetLinkPoem}>Песень 2, глава 2, 2.2.37</div>
				<div className={css.snippetDesc}>
					Те, кто упивается нектарным посланием Господа Кришны, возлюбленного преданных, освобождаются от порочных представлений о том, что целью жизни являются материальные наслаждения, и возвращаются обратно к Богу, к Его [Верховного Господа] лотосным стопам.
				</div>
			</div>

			<div className={css.snippetSanskrit}>
				<div className={css.sanskritText}>
					пибанти йе бхагавата а̄тманах̣ сата̄м̇<br />
					катха̄мр̣там̇ ш́раван̣а-пут̣ешу самбхр̣там<br />
					пунанти те вишайа-видӯшита̄ш́айам̇<br />
					враджанти тач-чаран̣а-сароруха̄нтикам
				</div>
				<div className={css.sanskritWordTranslationHeader}>
					Пословный перевод
				</div>
				<div className={css.sanskritWordTranslation}>
					Пибанти — пьют; йе — которые; бхагаватах̣ — Личности Бога; а̄тманах̣— самого близкого; сата̄м — для преданных;<br />
					катха̄- амр̣там — нектар посланий; ш́раван̣а-пут̣ешу — в ушах; самбхр̣там — наполненных; пунанти — очищают; те — их;<br />
					вишайа — материальным наслаждением; видӯшита-а̄ш́айам — оскверненные представления о цели жизни;<br />
					враджанти — отправляются обратно; тат — Господа; чаран̣а — стоп; сароруха-антикам — возле лотоса.
				</div>
				<div className={css.sanskritLinks}>
					<a href='#' className={css.sanskritLinkGood}>
						<span className={css.sanskritLinkGoodHeader}>Перейти к товару</span>
					</a>
					<a href='#' className={css.nextLinkGood}>
						<span className={css.nextLinkGoodHeader}>показать следующий стих</span>
						<img
							src='img/arrow-right.png'
							alt='arrow'
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default SnippetSlider
