import css from './Main.module.scss'
import React from 'react'
import Header from '../../components/header/Header'
import FirstScreen from './first-screen/FirstScreen'
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
		<div className={css.mainPage}>
			{/*<Header />*/}
			<FirstScreen />
			<Mission />
			{/*<SnippetSlider />*/}
			{/*<About />*/}
			{/*<BookSlider />*/}
			{/*<BookSets />*/}
			{/*<Video />*/}
			{/*<Lectures />*/}
			{/*<Blog />*/}
			{/*<Socials />*/}
			{/*<Team />*/}
			{/*<Footer />*/}
		</div>
	)
}

export default MainPage
