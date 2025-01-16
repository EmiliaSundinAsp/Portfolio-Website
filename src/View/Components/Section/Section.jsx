import './Section.css';

function Section({heading, paragraph}) {
	return (
		<div className='Section'>
			<h2 className='Heading'> {heading} </h2>
			<p className='Paragraph'> {paragraph} </p>
		</div>

	);
}

export default Section;