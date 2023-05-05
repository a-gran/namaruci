import React from 'react'
import './bookSlider.scss'

const BookSlider = () => {
    return (
        <div className="book-slider container">
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
    )
}

export default BookSlider
