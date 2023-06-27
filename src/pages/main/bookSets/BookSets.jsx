import React from 'react'
import css from './BookSets.module.scss'

const BookSets = () => {
    return (
        <div className={css.bookSets}>
            <div className={css.bookSetsItem}>
                <img
                    className={css.setFoto}
                    src="img/booksSet1.png"
                    alt="Комплект книг"
                />

                <div className={css.setDesc}>
                    <h3 className={css.setHeader}>Шри Чайтанья<br />Чаритамрита</h3>
                    <div className={css.setSnippet}>Аспирантура духовной жизни Шри Чайтанья Чаритамрита повествует о жизни Шри Чайтаньи Махапрабху, жившего в Индии около 500 лет назад, религиозного... </div>
                    <div className={css.setBtnBlock}>
                        <div className={css.setBtnLink}>Подробнее</div>
                        <div className={css.setPrice}>4900 руб!!!</div>
                    </div>
                </div>
            </div>

            <div className={css.bookSetsItem}>
                <div className={`${css.setDesc} ${css.right}`}>
                    <h3 className={css.setHeader}>Шримад<br />Бхагаватам</h3>
                    <div className={css.setSnippet}>Перед Вами представлен весь комплект книг Шримад Бхагаватам, переведённый на русский язык, состоящий из 26 томов, с 1 по 12 песнь. Изначально зна..</div>
                    <div className={css.setBtnBlock}>
                        <div className={`${css.setPrice} ${css.mr}`}>9900 руб!!!</div>
                        <div className={css.setBtnLink}>Подробнее</div>
                    </div>
                </div>

                <img
                    className={css.setFoto}
                    src="img/booksSet2.png"
                    alt="Комплект книг"
                />
            </div>

            <div className={css.allSets}>
                Все комплекты книг
            </div>
        </div>
    )
}

export default BookSets
