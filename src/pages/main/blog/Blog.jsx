import React from 'react'
import './blog.scss'

const Blog = () => {
    return (
        <div className="container about-us">
            <h2 className="blog__header">Наш блог</h2>
            <div className="blog__cards">
                <div className="blog__card">
                    <img
                        className="blog__card-img"
                        src="../../../public/img/blog/blog1.png"
                        alt="статья" />
                    <div className="blog__desc">
                        <div className="blog__desc-header">
                            Флаги, знамена, полезная информация, часть I
                        </div>
                        <div className="blog__grade">
                            <span className="grade__comments">21</span>
                            <div className="grade__views-likes">
                                <span className="grade__views">2321</span>
                                <span className="grade__likes">11</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <img
                        className="blog__card-img"
                        src="../../../public/img/blog/blog2.png"
                        alt="статья" />
                    <div className="blog__desc">
                        <div className="blog__desc-header">
                            Флаги, знамена, полезная информация, часть I
                        </div>
                        <div className="blog__grade">
                            <span className="grade__comments">21</span>
                            <div className="grade__views-likes">
                                <span className="grade__views">2321</span>
                                <span className="grade__likes">11</span>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <img
                        className="blog__card-img"
                        src="../../../public/img/blog/blog3.png"
                        alt="статья" />
                    <div className="blog__desc">
                        <div className="blog__desc-header">
                            Флаги, знамена, полезная информация, часть I
                        </div>
                        <div className="blog__grade">
                            <span className="grade__comments">21</span>
                            <div className="grade__views-likes">
                                <span className="grade__views">2321</span>
                                <span className="grade__likes">11</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="blog__pagination">
                <a href="#">
                    <img className="blog__arrow blog__arrow-left" src="../../../public/img/blog/icons/page-arrow-left.png" alt="стрелка влево" />
                </a>


                <div className="blog__pages">
                    <div className="blog__page">1</div>
                    <div className="blog__page">2</div>
                    <div className="blog__page page--focus">3</div>
                    <div className="blog__page">4</div>
                    <div className="blog__page">5</div>
                    <div className="blog__page">...</div>
                    <div className="blog__page">19</div>
                </div>

                <a href="#"><img className="blog__arrow blog__arrow-right" src="../../../public/img/blog/icons/page-arrow-right.png" alt="стрелка влево" /></a>
            </div>

            <div className="blog__btn-block">
                <a href="#" className="blog__btn-link">Смотреть все блоги</a>
            </div>
        </div>
    )
}

export default Blog
