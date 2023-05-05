import './main.scss'
import React from 'react'
import Header from '../../components/header/Header'
import Greetings from './greetings/Greetings'
import Mission from './mission/Mission'
import SnippetSlider from './snippetSlider/SnippetSlider'
import About from './about/About'
import BookSlider from './bookSlider/BookSlider'
import BookSets from './bookSets/BookSets'
import Video from './video/Video'
import Lectures from './lectures/Lectures'
import Blog from './blog/Blog'
import Socials from './socials/Socials'
import Team from './team/Team'
import Footer from '../../components/footer/Footer'

const MainPage = () => {
    return (
        <div className="main-page">
            <Header />
            <Greetings />
            <Mission />
            <SnippetSlider />
            <About />
            <BookSlider />
            <BookSets />
            <Video />
            <Lectures />
            <Blog />
            <Socials />
            <Team />
            <Footer />
        </div>
    )
}

export default MainPage