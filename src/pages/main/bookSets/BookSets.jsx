import React from 'react'
import './bookSets.scss'

const BookSets = () => {
    return (
        <div className="book-sets">
            <div className="book-sets__item">
                <img className="set__foto" src="/public/img/booksSet1.png" alt="Комплект книг" />

                <div className="set__desc">
                    <h3 className="set__header">Шри Чайтанья<br />Чаритамрита</h3>
                    <div className="set__snippet">Аспирантура духовной жизни Шри Чайтанья Чаритамрита повествует о жизни Шри Чайтаньи Махапрабху, жившего в Индии около 500 лет назад, религиозного... </div>
                    <div className="set__btn-block">
                        <div className="set__btn-link">Подробнее</div>
                        <div className="set__price">4900 руб!!!</div>
                    </div>
                </div>
            </div>

            <div className="book-sets__item">
                <div className="set__desc right">
                    <h3 className="set__header">Шримад<br />Бхагаватам</h3>
                    <div className="set__snippet">Перед Вами представлен весь комплект книг Шримад Бхагаватам, переведённый на русский язык, состоящий из 26 томов, с 1 по 12 песнь. Изначально зна..</div>
                    <div className="set__btn-block">
                        <div className="set__price mr">9900 руб!!!</div>
                        <div className="set__btn-link">Подробнее</div>
                    </div>
                </div>

                <img className="set__foto" src="/public/img/booksSet2.png" alt="Комплект книг" />
            </div>

            <div className="all-sets">
                Все комплекты книг
            </div>
        </div>
    )
}

export default BookSets
