import React from 'react'
import css from './Mission.module.scss'

const Mission = () => {
	return (
		<div className={css.missionBg}>
			<div className={`${css.container} ${css.mission}`}>
				<div className={css.missionText}>
					<div className={css.missionDesc}>
						Моя миссия заключается в проповеди
						философии Господа Чайтаньи, в повторении:
						<span className={css.missionTextDesc}>
							«Харе Кришна Харе Кришна, Кришна Кришна Харе Харе /
							Харе Рама Харе Рама, Рама Рама Харе Харе»
						</span> этот трансцендентный
						звук очистит ум от всякой скверны не важно кем бы человек
						не был, этот трансцендентный звук одинаково подходит каждому
						независимо от языка, национальности, вероисповедания и касты,
						поскольку этот звук исходит из глубины души.
					</div>
					<div className={css.missionSignature}>
						Любовь к Богу — высшее благо для всех людей
					</div>
				</div>
				<div className={css.missionImg}>
					<img src="img/mission.png" alt="mission" />
					<div className={css.missionImgHeader}>
						<div className={css.missionImgText}>Что<br />не является любовью?</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Mission

