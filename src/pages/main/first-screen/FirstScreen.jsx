import React from 'react'
import './first-screen.scss'

const FirstScreen = () => {
    return (
        <div className='container foto-prabhupada'>
            <img
                className='foto-prabhupada__img'
                src='img/prabhupada.png'
                alt='Prabhupada'
            />
            <div className="first-screen">
                <h1 className='harekrishna'>Харе Кришна!</h1>
                <div className='great-song'>Великая песнь</div>
                <div className='freedom'>освобождения!</div>
                <div className='foto-prabhupada__desc'>
                    <div className='foto-prabhupada__desc-header'>
                        Духовный учитель всего мира
                    </div>
                    <div>
                        Его Божественная Милость Абхай Чаранаравинда Бхактиведанта
                        Свами Шрила Прабхупадa
                    </div>
                    <a href='#' className='about-author'>
                        <span className='about-author__header'>Об авторе</span>
                        <img
                            className='arrow-right'
                            src='img/arrow-right.png'
                            alt='arrow'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FirstScreen
