import React from 'react'
import "./snippetSlider.scss"

const SnippetSlider = () => {
    return (
        <div className='container snippet'>
            <div className="snippet__poem">
                <h2 className="snippet__header">Шримад - Бхагаватам</h2>
                <div className="snippet__link-poem">Песень 2, глава 2, 2.2.37</div>
                <div className="snippet__desc">
                    Те, кто упивается нектарным посланием Господа Кришны, возлюбленного преданных, освобождаются от порочных представлений о том, что целью жизни являются материальные наслаждения, и возвращаются обратно к Богу, к Его [Верховного Господа] лотосным стопам.
                </div>
            </div>

            <div className="snippet__sanskrit">
                <div className="sanskrit__text">
                    пибанти йе бхагавата а̄тманах̣ сата̄м̇<br />
                    катха̄мр̣там̇ ш́раван̣а-пут̣ешу самбхр̣там<br />
                    пунанти те вишайа-видӯшита̄ш́айам̇<br />
                    враджанти тач-чаран̣а-сароруха̄нтикам
                </div>
                <div className="sanskrit__word-translation-header">
                    Пословный перевод
                </div>
                <div className="sanskrit__word-translation">
                    Пибанти — пьют; йе — которые; бхагаватах̣ — Личности Бога; а̄тманах̣— самого близкого; сата̄м — для преданных;
                    катха̄- амр̣там — нектар посланий; ш́раван̣а-пут̣ешу — в ушах; самбхр̣там — наполненных; пунанти — очищают; те — их;
                    вишайа — материальным наслаждением; видӯшита-а̄ш́айам — оскверненные представления о цели жизни;
                    враджанти — отправляются обратно; тат — Господа; чаран̣а — стоп; сароруха-антикам — возле лотоса.
                </div>
                <div className="sanskrit__links">
                    <a href='#' className='sanskrit__link-good'>
                        <span className='sanskrit__link-good-header'>Перейти к товару</span>
                    </a>
                    <a href='#' className='sanskrit__link-next'>
                        <span className='sanskrit__link-next-header'>Показать следующий стих</span>
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

export default SnippetSlider
