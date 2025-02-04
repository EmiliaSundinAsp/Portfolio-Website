import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import './NavBar/NavBar.css';

import PaletteIcon from './PaletteIcon/PaletteIcon';
import './PaletteIcon/PaletteIcon.css';

import MainPage from './MainPage/MainPage';
import './MainPage/MainPage.css';

import Title from './Title/Title';
import './Title/Title.css';

import Section from './Section/Section';
import './Section/Section.css';

import List from './List/List';
import './List/List.css';
import { useSelector } from 'react-redux';

import CoinFlip from './CoinFlip/CoinFlip';
import './CoinFlip/CoinFlip.css';


function PageContainer () {
	const state = useSelector(function(reduxState) {
		return reduxState
	})
	let Theme = "light";
	if (state.isDarkMode === true) {
		Theme = "dark";
	}
	return (
	<div className={Theme}>
		<div className='PageContainer'>
			<NavBar>
				<PaletteIcon/>
			</NavBar>
			<section className='ContentContainer'>
				<Routes>
					<Route path="/about" element={<MainPage>
						<Title title="About"/>
						<div className='AboutContainer'>
							<Section heading="Who's Emilia Sundin Asp?" paragraph="I am a 36 year old woman living i Norrköping with my boyfriend of many years, and our awesome 5-year-old boy. I consider myself creative and like painting, interior design and web design (although I am a complete novis at the latter!)."/>
							<Section heading="Was Emilia really a teacher?!" paragraph="Yes, indeed. I started my teacher's education in 2010, and worked as a teacher until early 2023. I then decided it was time to try my hand at something new, and started my journey towards becoming a front end developer."/>
							<Section heading="Why did Emilia change career?" paragraph="Being a teacher has always been a dream of mine, and when it was time to choose a career, it seemed the only possible choice. But after working as a teacher for 8 years, I started yearning to explore something new."/>
							<Section heading="What is Emilia studying?" paragraph="I'm studying my second year at KYH Anywhere to become a front end developer. I'm currently doing my internship at a company in Linköping until April. After that I'll do a final project and finish my education in May."/>
						</div>
					</MainPage>} />
					<Route path="/skills" element={<MainPage>
						<Title title="Skills"/>
						<div className='SkillsContainer'>
							<List heading="General skills:" listItem="Attention to detail" listItem2="Creative - with an eye for design" listItem3="Good team player" listItem4="Persistant" listItem5="Self reliant" listItem6="Good language and communication" listItem7="Eager to learn" listItem8="A fantastic sense of humor (if you like puns...)"/>
							<List heading="Coding skills:" listItem="JavaScript" listItem2="HTML" listItem3="CSS" listItem4="SASS" listItem5="Bootstrap" listItem6="TypeScript" listItem7="Figma" listItem8="... and working on more!"/>
						</div>
					</MainPage>} />
					<Route path="/projects" element={<MainPage>
						<Title title="Projects"/>
						<div className='ProjectsContainer'>
							<List heading="Some projects I've worked on so far:" listItem="Memory game" listItem2="Restaurant app" listItem3="Portfolio website - you're looking at it!"/>
							<CoinFlip/>
						</div>
					</MainPage>} />
					<Route path="/contact" element={<MainPage>
						<Title title="Contact"/>
						<div className='ContactContainer'>
							<List heading="You can contact me in the following ways:" listItem="Email: emiliasundinasp@gmail.com" listItem2="Phone: 070 - XXX XX XX" listItem3="GitHub: https://github.com/EmiliaSundinAsp"/>
						</div>
					</MainPage>} />
				</Routes>
			</section>
		</div>
	</div>
	)
}

export default PageContainer;