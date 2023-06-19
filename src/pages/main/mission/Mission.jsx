import React from "react";
import "./mission.scss"

const Mission = () => {
    return (
        <div className="mission__bg">
            <div className="container mission">
                <div className="mission__text">
                    <div className="mission-text__desc">
                        Моя миссия заключается в проповеди
                        философии Господа Чайтаньи, в
                        повторении:
                        <span className="mission-text__desc-harekrishna">
                            «Харе Кришна Харе Кришна, Кришна Кришна Харе Харе /
                            Харе Рама Харе Рама, Рама Рама Харе Харе»
                        </span> этот трансцендентный
                        звук очистит ум от всякой скверны не важно кем бы человек
                        не был, этот трансцендентный звук одинаково подходит каждому
                        независимо от языка, национальности, вероисповедания и касты,
                        поскольку этот звук исходит из глубины души.
                    </div>
                    <div className="mission-text__signature">
                        Любовь к Богу — высшее благо для всех людей
                    </div>
                </div>
                <div className="mission__img">
                    <img src="img/mission.png" alt="mission" />
                    <div className="mission__png-header">
                        <div className="mission-png__text">Что<br />не является любовью?</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Mission

