import React from "react";
import PropTypes from "prop-types";
import icon from './github-brands.svg';
import { Link } from 'react-router-dom';

const NavBar = ({title}) => {
	return (
		<nav className="navbar bg-primary">
            <img src={icon} alt="" className="icon" />
			<h1 className="fab fa-github header">
				{title}
			</h1>
			<ul>
				<li>
					<Link to ="/">Home</Link>
				</li>
				<li>
					<Link to ="/about">About</Link>
				</li>
			</ul>
		</nav>
	); 
};

NavBar.defaultProps = {
	title: "GitHub Finder",
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
};

export default NavBar;
