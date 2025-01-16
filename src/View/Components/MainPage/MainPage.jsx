import './MainPage.css';

function MainPage(props) {
	return (
		<section className='MainPage'>
			{props.children}
		</section>
	);
}

export default MainPage;