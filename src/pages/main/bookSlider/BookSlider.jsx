import React from 'react'
import './bookSlider.scss'

const BookSlider = () => {
    return (
        <div className="book-slider container">
            <div className="slider__top">
                <div className="book-slider__wrap">
                    <div className="book-slider__block">
                        <span className="book-slider__block-item">
                            Слайдер
                        </span>
                    </div>
                </div>
                <div className="book-slider__book-desc">
                    <h3 className="book-link__header">Шри Намамрита:<br /> нектар святого имени</h3>
                    <div className="book-link__author">Его божественная Милость<br /> А. Ч. Бхактиведанта Свами Прабхупада</div>
                    <div className="book-slider__btn-block">
                        <div className="book-slider__btn">Перейти в магазин</div>
                        <div className="book-slider__price">450 р.</div>
                    </div>

                </div>
            </div>

            <div className="book__announcement">
                Приходом кали-юги, эпохи воин и раздоров, память у людей стала ухудшаться, поэтому они были записаны великим мудрецом Шрилой Вьясадевой, "литературным воплощением Бога". Он собрал выводы всех Вед, вот почему «Шримад-Бхагаватам» считают «сливками» Ведической философии. Вы погрузитесь в атмосферу древней ведической цивилизации. Махараджа Парикшит, узнав, что ему осталось жить всего семь дней внимательно слушал "Шримад бхагаватам" и обрёл "освобождение". Если мы так же будем внимательно слушать и читать "Шримад Бхагаватам", то тоже станем достойны войти в Духовный мир, и получим возможность навсегда положить конец страданиям этого бренного тела в виде старости, болезней, смерти и нового рождения...
            </div>

            <div className="slider__bottom">

                <div className="slider__bottom-dots">
                    <div className="slider__dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>

                    <div className="slider__signature">А. Ч. Бхактиведанта Свами Прабхупада</div>

                </div>
            </div>



        </div>
    )
}

export default BookSlider
