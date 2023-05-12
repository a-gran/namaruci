import React from 'react'
import './team.scss'

const Team = () => {
    return (
        <div className="container about-us">
            <h2 className="team__header">Наша команда</h2>
            <div className="team__cards">
                <div className="team__card">
                    <img
                        className="team__card-img"
                        src="/public/img/team/bloger.png"
                        alt="статья" />
                    <div className="team__desc-header">
                        Видеоблогер
                    </div>
                    <div className="send-btn">
                        Отправить заявку
                    </div>
                </div>

                <div className="team__card">
                    <img
                        className="team__card-img"
                        src="/public/img/team/copywriter.png"
                        alt="статья" />
                    <div className="team__desc-header">
                        Копирайтер
                    </div>
                    <div className="send-btn">
                        Отправить заявку
                    </div>
                </div>

                <div className="team__card">
                    <img
                        className="team__card-img"
                        src="/public/img/team/smm.png"
                        alt="статья" />
                    <div className="team__desc-header">
                        SMM-специалист
                    </div>
                    <div className="send-btn">
                        Отправить заявку
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Team
