import React from 'react'
import './greetings.scss'

const Greetings = () => {
    return (
        <div className="foto-prabhupadac">
            <img className="foto-prabhupada__img" src='img/prabhupada.png' alt="Prabhupada" />
            <h1 className="harekrishna">Харе Кришна!</h1>
            <span className="great-song">Великая песнь</span>
            <span className="freedom">освобождения!</span>
            <p className='foto-prabhupada__desk'>
                <span className='foto-prabhupada__desk-header'>Духовный учитель всего мира</span>
                <span>Его Божественная Милость Абхай Чаранаравинда Бхактиведанта Свами Шрила Прабхупада</span>
            </p>
            <div className="about-author">
                <span className='about-author__header'>Об авторе</span>
                <img className='about-author__arrow' src="img/arrow-right.png" alt="arrow" />
            </div>
        </div>
    )
}

export default Greetings
