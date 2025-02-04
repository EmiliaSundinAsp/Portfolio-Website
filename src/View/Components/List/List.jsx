import './List.css';

function List({heading, listItem, listItem2, listItem3, listItem4, listItem5, listItem6, listItem7, listItem8}) {
	return (
		<div className='List'>
			<ul>
				<h2 className='ListHeading'>{heading}</h2>
				<li className="ListItem">{listItem}</li>
				<li className='ListItem'>{listItem2}</li>
				<li className='ListItem'>{listItem3}</li>
				<li className='ListItem'>{listItem4}</li>
				<li className='ListItem'>{listItem5}</li>
        <li className='ListItem'>{listItem6}</li>
        <li className='ListItem'>{listItem7}</li>
				<li className='ListItem'>{listItem8}</li>
			</ul>
		</div>
	);
}

export default List;