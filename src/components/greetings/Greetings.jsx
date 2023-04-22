import React from 'react'
import './greetings.scss'

const Greetings = () => {
    return (
        <a className="foto-prabhupada__link" target="_blank"
           href="https://ru.wikipedia.org/wiki/%D0%91%D1%85%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%B5%D0%B4%D0%B0%D0%BD%D1%82%D0%B0_%D0%A1%D0%B2%D0%B0%D0%BC%D0%B8_%D0%9F%D1%80%D0%B0%D0%B1%D1%85%D1%83%D0%BF%D0%B0%D0%B4%D0%B0">

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
        </a>
    );
};

export default Greetings
