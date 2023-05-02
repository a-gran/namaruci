import React from "react";
import "./mission.scss";

const Mission = () => {
    return (
        <div className="mission">
            <div className="mission__text">
                Моя миссия заключается в проповеди философии Господа Чайтаньи, в
                повторении: «Харе Кришна Харе Кришна, Кришна Кришна Харе Харе /
                Харе Рама Харе Рама, Рама Рама Харе Харе» этот трансцендентный
                звук очистит ум от всякой скверны не важно кем бы человек не
                был, этот трансцендентный звук одинаково подходит каждому
                независимо от языка, национальности, вероисповедания и касты,
                поскольку этот звук исходит из глубины души.
                <div className="mission-text_signature">
                    Любовь к Богу — высшее благо для всех людей
                </div>
            </div>
            <div className="mission__img">
                <img src="img/mission.png" alt="mission" />
                <div className="mission__png-header">
                    Что не является любовью?
                </div>
            </div>
        </div>
    );
};

export default Mission

