import React from 'react'
import css from './BookSlider.module.scss'

const BookSlider = () => {
	return (
		<div className={css.container}>
			<div className={css.bookSlider}>
				<div className={css.bookSliderWrap}>
					<div className={css.bookSliderBlock}>
						<span className={css.bookSliderBlockItem}>
							Слайдер
						</span>
					</div>
				</div>
				<div className={css.bookSliderBookDesc}>
					<h3 className={css.bookLinkHeader}>Шри Намамрита:<br /> нектар святого имени</h3>
					<div className={css.bookLinkHeaderAuthor}>Его божественная Милость<br /> А. Ч. Бхактиведанта Свами Прабхупада</div>
					<div className={css.bookSliderBtnBlock}>
						<div className={css.bookSliderBtn}>перейти в магазин</div>
						<div className={css.bookSliderPrice}>450 р.</div>
					</div>
				</div>
			</div>

			<div className={css.bookAnnouncement}>
				<div className={css.bookAnnouncementText}>
					Приходом кали-юги, эпохи воин и раздоров, память у людей стала ухудшаться, поэтому они были записаны великим мудрецом Шрилой Вьясадевой, "литературным воплощением Бога". Он собрал выводы всех Вед, вот почему «Шримад-Бхагаватам» считают «сливками» Ведической философии. Вы погрузитесь в атмосферу древней ведической цивилизации. Махараджа Парикшит, узнав, что ему осталось жить всего семь дней внимательно слушал "Шримад бхагаватам" и обрёл "освобождение". Если мы так же будем внимательно слушать и читать "Шримад Бхагаватам", то тоже станем достойны войти в Духовный мир, и получим возможность навсегда положить конец страданиям этого бренного тела в виде старости, болезней, смерти и нового рождения...
				</div>
				<div className={css.sliderSignature}>А. Ч. Бхактиведанта Свами Прабхупада</div>
			</div>

			<div className={css.bookSliderBottom}>
				<div className={css.bookSliderBottomDots}>
					<div className={css.bookSliderDots}>
						<div className={css.dot}></div>
						<div className={css.dot}></div>
						<div className={css.dot}></div>
						<div className={css.dot}></div>
						<div className={css.dot}></div>
						<div className={css.dot}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookSlider
