import { Link } from "react-router-dom";
import './NavBar.css';
import { useDispatch } from "react-redux";

function NavBar() {
	const dispatch = useDispatch()
	return (
		<nav className='NavBar'>
			<Link to="/about" className="NavLink">About </Link>
			<Link to="/skills" className="NavLink">Skills </Link>
			<Link to="/projects" className="NavLink">Projects </Link>
			<Link to="/contact" className="NavLink">Contact </Link>
			<button onClick={function() {
				dispatch({type: "Toggle_Theme"})
			}} className="DarkModeBtn">Change theme</button>
		</nav>
	);
}

export default NavBar;
